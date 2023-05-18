package io.tiklab.xcode.repository.service;

import io.tiklab.xcode.file.model.FileTree;
import io.tiklab.xcode.file.model.FileTreeMessage;
import io.tiklab.xcode.repository.model.RepositoryCloneAddress;
import io.tiklab.join.annotation.FindAll;
import io.tiklab.join.annotation.FindList;
import io.tiklab.join.annotation.FindOne;
import io.tiklab.join.annotation.JoinProvider;
import io.tiklab.xcode.repository.model.Repository;
import io.tiklab.xcode.repository.model.RepositoryQuery;

import java.util.List;

@JoinProvider(model = Repository.class)
public interface RepositoryServer {

    /**
     * 创建代码库
     * @param repository 信息
     * @return 代码库id
     */
    String createRpy(Repository repository);

    /**
     * 删除代码库
     * @param rpyId 代码库id
     */
    void deleteRpy(String rpyId);

    /**
     * 更新代码库
     * @param repository 代码库信息
     */
    void updateRpy(Repository repository);

    /**
     * 查询单个代码库
     * @param rpyId 代码库id
     * @return 代码库信息
     */
    @FindOne
    Repository findOneRpy(String rpyId);

    /**
     * 查询用户仓库
     * @param userId 用户id
     * @return 用户仓库
     */
    List<Repository> findUserRpy(String userId);

    /**
     * 查询所有代码库
     * @return 代码库信息列表
     */
    @FindAll
    List<Repository> findAllRpy();


    @FindList
    List<Repository> findAllRpyList(List<String> idList);

    /**
     * 根据仓库名称查询仓库信息
     * @param Name 仓库名称
     * @return 仓库信息
     */
    Repository findNameRpy(String Name);


    /**
     * 获取文件信息
     * @param message 信息
     * @return 文件集合
     */
    List<FileTree> findFileTree(FileTreeMessage message);


    /**
     * 获取克隆地址
     * @param rpyId 仓库id
     * @return 地址信息
     */
    RepositoryCloneAddress findCloneAddress(String rpyId);

    /**
     * 条件查询仓库
     * @param repositoryQuery repositoryQuery
     */
    List<Repository> findRepositoryList(RepositoryQuery repositoryQuery);
}




















































