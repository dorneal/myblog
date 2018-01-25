package com.neal.myblog.util;

import com.neal.myblog.entity.TArticleVO;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.index.Term;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;

import java.io.IOException;
import java.nio.file.Paths;

/*
   1.写一段传统的JDBC程序，将每条的用户信息从数据库读取出来
   2.针对每条用户记录，建立一个lucene document
        Document doc = new Document();
   3.并根据你的需要，将用户信息的各个字段对应luncene document中的field 进行添加，如：
        doc.add(new Field(“NAME”,”USERNAME”,Field.Store.YES,Field.Index.UN_TOKENIZED));
   4.然后将该条doc加入到索引中， 如： luceneWriter.addDocument(doc);
        这样就建立了lucene的索引库
   5.编写对索引库的搜索程序（看lucene文档），通过对lucene的索引库的查找，你可以快速找到对应记录的ID
   6.通过ID到数据库中查找相关记录
*/

/**
 * Lucene数据装填
 *
 * @author Neal
 */
public class DataBaseIndexUtil {

    /**
     * 设置默认索引位置
     */
    private static final String INDEX_PATH = "D://indexFile//dbIndex";
    private static Directory dir;
    private static Analyzer analyzer;
    private static IndexWriter writer;

    private DataBaseIndexUtil() {
        throw new AssertionError();
    }

    /**
     * 将Document对象更新索引（默认根据文章ID更新），用于文章更新时，对应的索引也应该更新
     *
     * @param tArticleVO TArticleVO
     * @throws IOException IOException
     */
    public static void updateIndex(TArticleVO tArticleVO) throws IOException {
        dir = FSDirectory.open(Paths.get(INDEX_PATH));
        analyzer = new StandardAnalyzer();
        IndexWriterConfig iwc = new IndexWriterConfig(analyzer);
        iwc.setOpenMode(IndexWriterConfig.OpenMode.APPEND);
        writer = new IndexWriter(dir, iwc);
        writer.updateDocument(new Term("article_id", tArticleVO.gettArticleEX().getArticleId() + ""), getDoc(tArticleVO));
        writer.commit();
        writer.close();
    }

    /**
     * 增加索引，用于文章发布时，添加对应索引
     *
     * @param tArticleVO TArticleVO
     * @throws IOException IOException
     */
    public static void addIndex(TArticleVO tArticleVO) throws IOException {
        dir = FSDirectory.open(Paths.get(INDEX_PATH));
        analyzer = new StandardAnalyzer();
        IndexWriterConfig iwc = new IndexWriterConfig(analyzer);
        iwc.setOpenMode(IndexWriterConfig.OpenMode.APPEND);
        writer = new IndexWriter(dir, iwc);
        writer.addDocument(getDoc(tArticleVO));
        writer.commit();
        writer.close();
    }

    /**
     * 删除指定索引,用于文章删除时，对应索引也应该删除
     *
     * @throws IOException IOException
     */
    public static void deleteIndex(long articleId) throws IOException {
        dir = FSDirectory.open(Paths.get(INDEX_PATH));
        analyzer = new StandardAnalyzer();
        IndexWriterConfig iwc = new IndexWriterConfig(analyzer);
        writer = new IndexWriter(dir, iwc);
        writer.deleteDocuments(new Term("article_id", articleId + ""));
        writer.commit();
        writer.close();
    }

    /**
     * 返回一个更新后的Document对象，用于更新，添加索引
     *
     * @param tArticleVO TArticleVO
     * @return Document
     */
    private static Document getDoc(TArticleVO tArticleVO) {
        Document doc = new Document();
        doc.add(new TextField("article_id", tArticleVO.gettArticleEX().getArticleId() + "", Field.Store.YES));
        doc.add(new TextField("article_title", tArticleVO.gettArticleEX().getArticleTitle() + "", Field.Store.YES));
        doc.add(new TextField("article_time", tArticleVO.gettArticleEX().getArticleTime() + "", Field.Store.YES));
        doc.add(new TextField("article_content", tArticleVO.gettArticleEX().getArticleContent() + "", Field.Store.YES));
        doc.add(new TextField("article_tag", tArticleVO.gettArticleEX().getArticleTag() + "", Field.Store.YES));
        doc.add(new TextField("category_name", tArticleVO.gettCategory().getCategoryName() + "", Field.Store.YES));
        return doc;
    }

//    public static void main(String[] args) {
//        TArticleVO tArticleVO = new TArticleVO();
//
//        TArticleEX tArticleEX = new TArticleEX();
//        tArticleEX.setArticleId(3);
//        tArticleEX.setArticleContent("nothing");
//        tArticleEX.setArticleTime(new Timestamp(System.currentTimeMillis()));
//        tArticleEX.setArticleTag("原创");
//        tArticleEX.setArticleTitle("案例");
//        tArticleEX.setCategoryId(3);
//
//        TCategory tCategory = new TCategory();
//        tCategory.setCategoryId(3);
//        tCategory.setCategoryName("math");
//
//        tArticleVO.settArticleEX(tArticleEX);
//        tArticleVO.settCategory(tCategory);
//        try {
////            createIndex();
//            updateIndex(tArticleVO);
////            deleteIndex(tArticleVO);
////            addIndex(tArticleVO);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
}
