package com.neal.myblog.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.UUID;

/**
 * 文件上传工具类
 *
 * @author Neal
 */
public class UploadUtil {
    private UploadUtil() {
        throw new AssertionError();
    }

    /**
     * 图片上传到真实目录，返回图片URL
     *
     * @param file     byte[]
     * @param filePath String
     * @param fileName String
     * @return String
     * @throws IOException IOException
     */
    public static String uploadImage(byte[] file, String filePath, String fileName) throws IOException {
        File targetFile = new File(filePath);
        if (!targetFile.exists()) {
            if (targetFile.mkdirs()) {
                System.out.println("图片上传================>目录已创建");
            }
        }
        fileName = UUID.randomUUID().toString().substring(0, 8) + fileName;
        String name = filePath + "\\" + fileName;
        FileOutputStream out = new FileOutputStream(name);
        out.write(file);
        out.flush();
        out.close();
        // 上传时需要改变路径
        return "http://localhost:8089/myblog/uploads/" + fileName;
    }
}
