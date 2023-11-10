package io.tiklab.xcode.scan.service;


import io.tiklab.core.page.Pagination;
import io.tiklab.join.annotation.FindAll;
import io.tiklab.join.annotation.FindList;
import io.tiklab.join.annotation.FindOne;
import io.tiklab.join.annotation.JoinProvider;
import io.tiklab.xcode.scan.model.ScanSchemeSonar;
import io.tiklab.xcode.scan.model.ScanSchemeSonarQuery;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
* ScanSchemeSonarService-扫描方案sonar关系
*/
@JoinProvider(model = ScanSchemeSonar.class)
public interface ScanSchemeSonarService {

    /**
    * 创建
    * @param scanSchemeSonar
    * @return
    */
    String createScanSchemeSonar(@NotNull @Valid ScanSchemeSonar scanSchemeSonar);

    /**
    * 更新
    * @param scanSchemeSonar
    */
    void updateScanSchemeSonar(@NotNull @Valid ScanSchemeSonar scanSchemeSonar);

    /**
    * 删除
    * @param id
    */
    void deleteScanSchemeSonar(@NotNull String id);

    /**
     * 条件删除扫描结果
     * @param  key  删除条件字段
     * @param value
     */
    void deleteScanSchemeSonarByCondition(@NotNull String key,@NotNull String value);

    @FindOne
    ScanSchemeSonar findOne(@NotNull String id);

    @FindList
    List<ScanSchemeSonar> findList(List<String> idList);

    /**
    * 查找
    * @param id
    * @return
    */

    ScanSchemeSonar findScanSchemeSonar(@NotNull String id);

    /**
    * 查找所有
    * @return
    */
    @FindAll
    List<ScanSchemeSonar> findAllScanSchemeSonar();

    /**
    * 查询列表
    * @param scanSchemeSonarQuery
    * @return
    */
    List<ScanSchemeSonar> findScanSchemeSonarList(ScanSchemeSonarQuery scanSchemeSonarQuery);

    /**
    * 按分页查询
    * @param scanSchemeSonarQuery
    * @return
    */
    Pagination<ScanSchemeSonar> findScanSchemeSonarPage(ScanSchemeSonarQuery scanSchemeSonarQuery);

}