package com.neal.myblog.util;

import java.io.*;

/**
 * Base64 编码和解码。
 *
 * @author 宋立君
 * @date 2014年07月03日
 */
public class Base64 {

    public Base64() {
        throw new AssertionError();
    }

    /**
     * 功能：编码字符串
     *
     * @param data 源字符串
     * @return String
     * @author 宋立君
     * @date 2014年07月03日
     */
    public static String encode(String data) {
        return new String(encode(data.getBytes()));
    }

    /**
     * 功能：解码字符串
     *
     * @param data 源字符串
     * @return String
     * @author 宋立君
     * @date 2014年07月03日
     */
    private static String decode(String data) {
        return new String(decode(data.toCharArray()));
    }

    /**
     * 功能：编码byte[]
     *
     * @param data 源
     * @return char[]
     * @author 宋立君
     * @date 2014年07月03日
     */
    public static char[] encode(byte[] data) {
        char[] out = new char[((data.length + 2) / 3) * 4];
        for (int i = 0, index = 0; i < data.length; i += 3, index += 4) {
            boolean quad = false;
            boolean trip = false;

            int val = (0xFF & (int) data[i]);
            val <<= 8;
            if ((i + 1) < data.length) {
                val |= (0xFF & (int) data[i + 1]);
                trip = true;
            }
            val <<= 8;
            if ((i + 2) < data.length) {
                val |= (0xFF & (int) data[i + 2]);
                quad = true;
            }
            out[index + 3] = alphabet[(quad ? (val & 0x3F) : 64)];
            val >>= 6;
            out[index + 2] = alphabet[(trip ? (val & 0x3F) : 64)];
            val >>= 6;
            out[index + 1] = alphabet[val & 0x3F];
            val >>= 6;
            out[index] = alphabet[val & 0x3F];
        }
        return out;
    }

    /**
     * 功能：解码
     *
     * @param data 编码后的字符数组
     * @return byte[]
     * @author 宋立君
     * @date 2014年07月03日
     */
    private static byte[] decode(char[] data) {

        int tempLen = data.length;
        for (char aData : data) {
            if ((aData > 255) || codes[aData] < 0) {
                --tempLen; // ignore non-valid chars and padding
            }
        }
        // calculate required length:
        // -- 3 bytes for every 4 valid base64 chars
        // -- plus 2 bytes if there are 3 extra base64 chars,
        // or plus 1 byte if there are 2 extra.

        int len = (tempLen / 4) * 3;
        if ((tempLen % 4) == 3) {
            len += 2;
        }
        if ((tempLen % 4) == 2) {
            len += 1;

        }
        byte[] out = new byte[len];

        int shift = 0;
        int accum = 0;
        int index = 0;

        // we now go through the entire array (NOT using the 'tempLen' value)
        for (char aData : data) {
            int value = (aData > 255) ? -1 : codes[aData];

            if (value >= 0) {
                accum <<= 6;
                shift += 6;
                accum |= value;
                if (shift >= 8) {
                    shift -= 8;
                    out[index++] =
                            (byte) ((accum >> shift) & 0xff);
                }
            }
        }

        // if there is STILL something wrong we just have to throw up now!
        if (index != out.length) {
            throw new Error("Miscalculated data length (wrote " + index
                    + " instead of " + out.length + ")");
        }

        return out;
    }

    /**
     * 功能：编码文件
     *
     * @param file 源文件
     * @author 宋立君
     * @date 2014年07月03日
     */
    public static void encode(File file) throws IOException {
        if (!file.exists()) {
            System.exit(0);
        } else {
            byte[] decoded = readBytes(file);
            char[] encoded = encode(decoded);
            writeChars(file, encoded);
        }
    }

    private static char[] alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            .toCharArray();

    private static byte[] codes = new byte[256];

    static {
        for (int i = 0; i < 256; i++) {
            codes[i] = -1;
        }
        for (int i = 'A'; i <= 'Z'; i++) {
            codes[i] = (byte) (i - 'A');
        }

        for (int i = 'a'; i <= 'z'; i++) {
            codes[i] = (byte) (26 + i - 'a');
        }
        for (int i = '0'; i <= '9'; i++) {
            codes[i] = (byte) (52 + i - '0');
        }
        codes['+'] = 62;
        codes['/'] = 63;
    }

    private static byte[] readBytes(File file) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        byte[] b;
        InputStream fis = null;
        InputStream is = null;
        try {
            fis = new FileInputStream(file);
            is = new BufferedInputStream(fis);
            int count;
            byte[] buf = new byte[16384];
            while ((count = is.read(buf)) != -1) {
                if (count > 0) {
                    baos.write(buf, 0, count);
                }
            }
            b = baos.toByteArray();

        } finally {
            try {
                if (fis != null) {
                    fis.close();
                }
                if (is != null) {
                    is.close();
                }
                baos.close();
            } catch (Exception e) {
                System.out.println(e.toString());
            }
        }

        return b;
    }
    
    private static void writeChars(File file, char[] data) throws IOException {
        Writer fos = null;
        Writer os = null;
        try {
            fos = new FileWriter(file);
            os = new BufferedWriter(fos);
            os.write(data);

        } finally {
            try {
                if (os != null) {
                    os.close();
                }
                if (fos != null) {
                    fos.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
