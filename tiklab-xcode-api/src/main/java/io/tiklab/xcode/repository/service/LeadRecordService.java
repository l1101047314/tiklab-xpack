package io.tiklab.xcode.repository.service;

import io.tiklab.join.annotation.FindAll;
import io.tiklab.join.annotation.FindList;
import io.tiklab.join.annotation.FindOne;
import io.tiklab.join.annotation.JoinProvider;
import io.tiklab.xcode.repository.model.LeadRecord;
import io.tiklab.xcode.repository.model.LeadRecordQuery;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
* LeadRecordService-导入第三方应用的仓库
*/
public interface LeadRecordService {

    /**
    * 创建
    * @param leadRecord
    * @return
    */
    String createLeadRecord(@NotNull @Valid LeadRecord leadRecord);


    /**
    * 删除
    * @param id
    */
    void deleteLeadRecord(@NotNull String id);

    /**
     * 根据表中的其他条件字段删除
     * @param field 删除的条件字段
     * @param value 参数
     */
    void deleteLeadRecord(@NotNull String field,String value);


    @FindOne
    LeadRecord findOne(@NotNull String id);
    @FindList
    List<LeadRecord> findList(List<String> idList);

    /**
    * 查找
    * @param id
    * @return
    */
    LeadRecord findLeadRecord(@NotNull String id);

    /**
    * 查找所有
    * @return
    */
    @FindAll
    List<LeadRecord> findAllLeadRecord();

    /**
    * 查询列表
    * @param leadRecordQuery
    * @return
    */
    List<LeadRecord> findLeadRecordList(LeadRecordQuery leadRecordQuery);


}