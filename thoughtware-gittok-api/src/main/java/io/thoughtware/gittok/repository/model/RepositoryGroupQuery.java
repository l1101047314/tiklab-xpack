package io.thoughtware.gittok.repository.model;

import io.thoughtware.core.page.Page;
import io.thoughtware.postin.annotation.ApiModel;
import io.thoughtware.postin.annotation.ApiProperty;

import java.io.Serializable;

@ApiModel
public class RepositoryGroupQuery implements Serializable {

    @ApiProperty(name ="pageParam",desc = "分页参数")
    private Page pageParam = new Page();

    @ApiProperty(name ="userId",desc = "登录用户")
    private String  userId;

    @ApiProperty(name ="findType",desc = "查询类型 自己创建的：oneself、有权限看的：viewable")
    private String  findType;

    @ApiProperty(name ="userId",desc = "仓库名称")
    private String  name;

    public Page getPageParam() {
        return pageParam;
    }

    public void setPageParam(Page pageParam) {
        this.pageParam = pageParam;
    }

    public String getFindType() {
        return findType;
    }

    public void setFindType(String findType) {
        this.findType = findType;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}







































