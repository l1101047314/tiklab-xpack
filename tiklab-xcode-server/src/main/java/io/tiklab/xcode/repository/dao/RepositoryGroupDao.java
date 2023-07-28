package io.tiklab.xcode.repository.dao;

import io.tiklab.core.page.Pagination;
import io.tiklab.dal.jpa.JpaTemplate;
import io.tiklab.dal.jpa.criterial.condition.QueryCondition;
import io.tiklab.dal.jpa.criterial.conditionbuilder.QueryBuilders;
import io.tiklab.xcode.repository.entity.RepositoryGroupEntity;
import io.tiklab.xcode.repository.model.RepositoryGroupQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RepositoryGroupDao {

    @Autowired
    JpaTemplate jpaTemplate;

    /**
     * 创建仓库组
     * @param repositoryGroupEntity 仓库组信息
     * @return 仓库组id
     */
    public String createCodeGroup(RepositoryGroupEntity repositoryGroupEntity){
        return jpaTemplate.save(repositoryGroupEntity, String.class);
    }

    /**
     * 删除仓库组
     * @param codeGroupId 仓库组id
     */
    public void deleteCodeGroup(String codeGroupId){
        jpaTemplate.delete(RepositoryGroupEntity.class,codeGroupId);
    }


    /**
     * 更新仓库组
     * @param repositoryGroupEntity 仓库组信息
     */
    public void updateCodeGroup(RepositoryGroupEntity repositoryGroupEntity){
        jpaTemplate.update(repositoryGroupEntity);
    }

    /**
     * 查询单个仓库组信息
     * @param codeGroupId 仓库组id
     * @return 仓库组信息
     */
    public RepositoryGroupEntity findOneCodeGroup(String codeGroupId){
        return jpaTemplate.findOne(RepositoryGroupEntity.class,codeGroupId);
    }

    /**
     * 查询所有仓库组
     * @return 仓库组列表
     */
    public List<RepositoryGroupEntity> findAllCodeGroup(){
        return jpaTemplate.findAll(RepositoryGroupEntity.class);
    }


    public List<RepositoryGroupEntity> findAllCodeGroupList(List<String> idList){
        return jpaTemplate.findList(RepositoryGroupEntity.class,idList);
    }

    /**
     * 通过ids查询
     * @param repositoryGroupQuery
     * @return
     */
    public Pagination<RepositoryGroupEntity> findRepositoryGroupPage(RepositoryGroupQuery repositoryGroupQuery, String[] ids) {

        QueryCondition queryCondition = QueryBuilders.createQuery(RepositoryGroupEntity.class)
                .in("groupId",ids)
                .pagination(repositoryGroupQuery.getPageParam())
                .get();
        return jpaTemplate.findPage(queryCondition,RepositoryGroupEntity.class);
    }

    /**
     * 条件查询仓库库
     * @param name
     */
    public List<RepositoryGroupEntity> findRepositoryByName(String name) {
        QueryCondition queryCondition = QueryBuilders.createQuery(RepositoryGroupEntity.class)
                .eq("name", name)
                .get();
        return jpaTemplate.findList(queryCondition, RepositoryGroupEntity.class);
    }

    /**
     * 通过仓库名字模糊查询仓库列表
     * @param repositoryGroupQuery
     * @return
     */
    public List<RepositoryGroupEntity> findRepositoryListLike(RepositoryGroupQuery repositoryGroupQuery) {
        QueryBuilders queryBuilders = QueryBuilders.createQuery(RepositoryGroupEntity.class)
                .like("name", repositoryGroupQuery.getName());
        if (("oneself").equals(repositoryGroupQuery.getFindType())){
            queryBuilders.eq("userId", repositoryGroupQuery.getUserId());
        }
        QueryCondition queryCondition = queryBuilders.get();
        return jpaTemplate.findList(queryCondition, RepositoryGroupEntity.class);
    }

    /**
     * 查询所有
     */
    public List<RepositoryGroupEntity> findAllGroup() {
        return jpaTemplate.findAll(RepositoryGroupEntity.class);
    }

    /**
     * 查询自己创建的仓库组
     */
    public List<RepositoryGroupEntity> findCanCreateRpyGroup(String userId) {
        QueryCondition queryCondition = QueryBuilders.createQuery(RepositoryGroupEntity.class)
                .eq("userId",userId)
                .get();
        return jpaTemplate.findList(queryCondition, RepositoryGroupEntity.class);
    }
}
