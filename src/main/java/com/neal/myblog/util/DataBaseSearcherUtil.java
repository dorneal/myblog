package com.neal.myblog.util;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;


/**
 * Lucene数据查找
 *
 * @author dell
 */
public class DataBaseSearcherUtil {

    /**
     * 默认索引位置
     */
    private static final String INDEX_PATH = "D://indexFile//dbIndex";

    private DataBaseSearcherUtil() {
        throw new AssertionError();
    }

    /**
     * 返回文章ID list
     *
     * @param file     确认搜索的域
     * @param keywords 关键字
     * @param num      搜素深度
     * @return List
     * @throws IOException    IOException
     * @throws ParseException ParseException
     */
    public static List<String> searchData(String file, String keywords, int num) throws IOException, ParseException {
        Directory dir;
        dir = FSDirectory.open(Paths.get(INDEX_PATH));
        IndexReader reader = DirectoryReader.open(dir);
        IndexSearcher searcher = new IndexSearcher(reader);
        Analyzer analyzer = new StandardAnalyzer();
        QueryParser parser = new QueryParser(file, analyzer);
        parser.setDefaultOperator(QueryParser.AND_OPERATOR);
        Query query = parser.parse(keywords);
        TopDocs hits = searcher.search(query, num);
        List<String> list = new ArrayList<>();
        for (ScoreDoc scoreDoc : hits.scoreDocs) {
            Document doc = searcher.doc(scoreDoc.doc);
            list.add(doc.get("article_id"));
        }
        System.out.println("有效的索引文档:" + reader.numDocs());
        System.out.println("删掉的索引文档:" + reader.numDeletedDocs());
        return list;
    }

    public static void main(String[] args) {
        try {
            List<String> list = searchData("article_content", "nothing", 100);
            System.out.println(list.size());
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
    }
}
