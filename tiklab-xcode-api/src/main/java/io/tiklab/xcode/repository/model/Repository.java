package io.tiklab.xcode.repository.model;

import io.tiklab.beans.annotation.Mapper;
import io.tiklab.beans.annotation.Mapping;
import io.tiklab.beans.annotation.Mappings;
import io.tiklab.join.annotation.Join;
import io.tiklab.join.annotation.JoinQuery;
import io.tiklab.postin.annotation.ApiModel;
import io.tiklab.postin.annotation.ApiProperty;
import io.tiklab.user.user.model.User;

@ApiModel
@Join
@Mapper(targetAlias = "RepositoryEntity")
public class Repository {

    @ApiProperty(name="rpyId",desc="仓库id")
    private String rpyId;

    //仓库组id
    @Mappings({
            @Mapping(source = "group.groupId",target = "groupId")
    })
    @JoinQuery(key = "groupId")
    private RepositoryGroup group;

    @ApiProperty(name="name",desc="仓库名称")
    private String name;

    @ApiProperty(name="address",desc="仓库地址")
    private String address;

    @ApiProperty(name="createTime",desc="创建时间")
    private String createTime;

    @ApiProperty(name="updateTime",desc="更新时间")
    private String updateTime;

    @ApiProperty(name="type",desc="类型")
    private int type;

    //创建人
    @Mappings({
            @Mapping(source = "user.id",target = "userId")
    })
    @JoinQuery(key = "id")
    private User user;

    @ApiProperty(name="remarks",desc="描述")
    private String remarks;

    @ApiProperty(name="language",desc="语言")
    private String language;

    @ApiProperty(name="state",desc="仓库状态")
    private int state;

    /**
     * 默认分支
     */
    private String defaultBranch;

    /**
     * 是否为空仓库
     */
    private boolean notNull;


    public String getRpyId() {
        return rpyId;
    }

    public void setRpyId(String rpyId) {
        this.rpyId = rpyId;
    }

    public RepositoryGroup getGroup() {
        return group;
    }

    public void setGroup(RepositoryGroup group) {
        this.group = group;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }


    public String getDefaultBranch() {
        return defaultBranch;
    }

    public void setDefaultBranch(String defaultBranch) {
        this.defaultBranch = defaultBranch;
    }

    public boolean isNotNull() {
        return notNull;
    }

    public void setNotNull(boolean notNull) {
        this.notNull = notNull;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }
}







































