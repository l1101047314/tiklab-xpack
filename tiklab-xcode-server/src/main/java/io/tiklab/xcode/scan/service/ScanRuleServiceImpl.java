package io.tiklab.xcode.scan.service;

import io.tiklab.beans.BeanMapper;
import io.tiklab.core.page.Pagination;
import io.tiklab.core.page.PaginationBuilder;
import io.tiklab.join.JoinTemplate;
import io.tiklab.rpc.annotation.Exporter;
import io.tiklab.xcode.scan.dao.ScanRuleDao;
import io.tiklab.xcode.scan.entity.ScanRuleEntity;
import io.tiklab.xcode.scan.model.ScanRule;
import io.tiklab.xcode.scan.model.ScanRuleQuery;
import io.tiklab.xcode.scan.model.ScanRecord;
import io.tiklab.xcode.scan.model.ScanRecordQuery;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.List;

/**
* ScanRuleServiceImpl-扫描规则接口实现
*/
@Service
@Exporter
public class ScanRuleServiceImpl implements ScanRuleService {

    @Autowired
    ScanRuleDao scanRuleDao;

    @Autowired
    JoinTemplate joinTemplate;

    @Autowired
    ScanRecordService scanRecordService;

    @Override
    public String createScanRule(@NotNull @Valid ScanRule openRecord) {

        ScanRuleEntity openRecordEntity = BeanMapper.map(openRecord, ScanRuleEntity.class);
        openRecordEntity.setCreateTime(new Timestamp(System.currentTimeMillis()));
        String openRecordId= scanRuleDao.createScanRule(openRecordEntity);

        return openRecordId;
    }

    @Override
    public void updateScanRule(@NotNull @Valid ScanRule openRecord) {
        ScanRuleEntity openRecordEntity = BeanMapper.map(openRecord, ScanRuleEntity.class);

        scanRuleDao.updateScanRule(openRecordEntity);
    }

    @Override
    public void deleteScanRule(@NotNull String id) {
        scanRuleDao.deleteScanRule(id);
    }

    @Override
    public void deleteScanRuleByCondition(String key, String value) {

    }

    @Override
    public ScanRule findOne(String id) {
        ScanRuleEntity openRecordEntity = scanRuleDao.findScanRule(id);

        ScanRule openRecord = BeanMapper.map(openRecordEntity, ScanRule.class);
        return openRecord;
    }

    @Override
    public List<ScanRule> findList(List<String> idList) {
        List<ScanRuleEntity> openRecordEntityList =  scanRuleDao.findScanRuleList(idList);

        List<ScanRule> openRecordList =  BeanMapper.mapList(openRecordEntityList, ScanRule.class);
        return openRecordList;
    }

    @Override
    public ScanRule findScanRule(@NotNull String id) {
        ScanRule openRecord = findOne(id);

        joinTemplate.joinQuery(openRecord);

        return openRecord;
    }

    @Override
    public List<ScanRule> findAllScanRule() {
        List<ScanRuleEntity> openRecordEntityList =  scanRuleDao.findAllScanRule();

        List<ScanRule> openRecordList =  BeanMapper.mapList(openRecordEntityList, ScanRule.class);

        joinTemplate.joinQuery(openRecordList);

        return openRecordList;
    }

    @Override
    public List<ScanRule> findScanRuleList(ScanRuleQuery ScanRuleQuery) {
        List<ScanRuleEntity> openRecordEntityList = scanRuleDao.findScanRuleList(ScanRuleQuery);

        List<ScanRule> openRecordList = BeanMapper.mapList(openRecordEntityList, ScanRule.class);
        joinTemplate.joinQuery(openRecordList);

        return openRecordList;
    }

    @Override
    public Pagination<ScanRule> findScanRulePage(ScanRuleQuery ScanRuleQuery) {
        Pagination<ScanRuleEntity>  pagination = scanRuleDao.findScanRulePage(ScanRuleQuery);

        List<ScanRule> openRecordList = BeanMapper.mapList(pagination.getDataList(), ScanRule.class);
        joinTemplate.joinQuery(pagination.getDataList());

        return PaginationBuilder.build(pagination,openRecordList);
    }
}