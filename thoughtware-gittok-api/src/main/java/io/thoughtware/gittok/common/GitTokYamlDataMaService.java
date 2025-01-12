package io.thoughtware.gittok.common;

public interface GitTokYamlDataMaService {


    /**
     * 仓库地址
     */
    String repositoryAddress();


    /**
     * 仓库备份上传地址
     */
    String uploadAddress();

    /**
     *仓库上传的路径
     */
    String visitAddress();

    /**
     *项目port
     */
    String serverPort();


    /**
     *ssh port
     */
    String sshPort();

    /**
     *jdbc host
     */
     String host();

    /**
     *jdbc dbName
     */
    String dbName();

    /**
     *jdbc schemaName
     */
    String schemaName();

    /**
     * pgsql的地址
     */
    String pgSqlAddress();

    /**
     * spotbugsAddress的地址
     */
    String spotbugsAddress();


    /**
     * 扫描文件存放地址
     */
    String scanFileAddress();
}
