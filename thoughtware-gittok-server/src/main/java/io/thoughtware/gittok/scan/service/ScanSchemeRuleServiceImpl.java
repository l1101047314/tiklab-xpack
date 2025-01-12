package io.thoughtware.gittok.scan.service;

import io.thoughtware.gittok.scan.model.ScanSchemeRule;
import io.thoughtware.gittok.scan.model.ScanSchemeRuleQuery;
import io.thoughtware.toolkit.beans.BeanMapper;
import io.thoughtware.core.page.Pagination;
import io.thoughtware.core.page.PaginationBuilder;
import io.thoughtware.dal.jpa.criterial.condition.DeleteCondition;
import io.thoughtware.dal.jpa.criterial.conditionbuilder.DeleteBuilders;
import io.thoughtware.toolkit.join.JoinTemplate;
import io.thoughtware.rpc.annotation.Exporter;
import io.thoughtware.gittok.scan.dao.ScanSchemeRuleDao;
import io.thoughtware.gittok.scan.entity.ScanSchemeRuleEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.List;

/**
* ScanSchemeRuleServiceImpl-扫描方案规则关系
*/
@Service
@Exporter
public class ScanSchemeRuleServiceImpl implements ScanSchemeRuleService {

    @Autowired
    ScanSchemeRuleDao scanSchemeRuleDao;

    @Autowired
    JoinTemplate joinTemplate;

    @Autowired
    ScanRecordService scanRecordService;

    @Override
    public String createScanSchemeRule(@NotNull @Valid ScanSchemeRule scanSchemeRule) {

        ScanSchemeRuleEntity scanSchemeRuleEntity = BeanMapper.map(scanSchemeRule, ScanSchemeRuleEntity.class);
        scanSchemeRuleEntity.setCreateTime(new Timestamp(System.currentTimeMillis()));
        String scanSchemeRuleId= scanSchemeRuleDao.createScanSchemeRule(scanSchemeRuleEntity);

        return scanSchemeRuleId;
    }

    @Override
    public void updateScanSchemeRule(@NotNull @Valid ScanSchemeRule scanSchemeRule) {
        ScanSchemeRuleEntity scanSchemeRuleEntity = BeanMapper.map(scanSchemeRule, ScanSchemeRuleEntity.class);

        scanSchemeRuleDao.updateScanSchemeRule(scanSchemeRuleEntity);
    }

    @Override
    public void deleteScanSchemeRule(@NotNull String id) {
        scanSchemeRuleDao.deleteScanSchemeRule(id);
    }

    @Override
    public void deleteScanSchemeRuleByCondition(String key, String value) {
        DeleteCondition deleteCondition = DeleteBuilders.createDelete(ScanSchemeRuleEntity.class)
                .eq(key, value)
                .get();
        scanSchemeRuleDao.deleteScanSchemeRule(deleteCondition);
    }

    @Override
    public ScanSchemeRule findOne(String id) {
        ScanSchemeRuleEntity scanSchemeRuleEntity = scanSchemeRuleDao.findScanSchemeRule(id);

        ScanSchemeRule scanSchemeRule = BeanMapper.map(scanSchemeRuleEntity, ScanSchemeRule.class);
        return scanSchemeRule;
    }

    @Override
    public List<ScanSchemeRule> findList(List<String> idList) {
        List<ScanSchemeRuleEntity> scanSchemeRuleEntityList =  scanSchemeRuleDao.findScanSchemeRuleList(idList);

        List<ScanSchemeRule> scanSchemeRuleList =  BeanMapper.mapList(scanSchemeRuleEntityList, ScanSchemeRule.class);
        return scanSchemeRuleList;
    }

    @Override
    public ScanSchemeRule findScanSchemeRule(@NotNull String id) {
        ScanSchemeRule scanSchemeRule = findOne(id);

        joinTemplate.joinQuery(scanSchemeRule);

        return scanSchemeRule;
    }

    @Override
    public List<ScanSchemeRule> findAllScanSchemeRule() {
        List<ScanSchemeRuleEntity> scanSchemeRuleEntityList =  scanSchemeRuleDao.findAllScanSchemeRule();

        List<ScanSchemeRule> scanSchemeRuleList =  BeanMapper.mapList(scanSchemeRuleEntityList, ScanSchemeRule.class);

        joinTemplate.joinQuery(scanSchemeRuleList);

        return scanSchemeRuleList;
    }

    @Override
    public List<ScanSchemeRule> findScanSchemeRuleList(ScanSchemeRuleQuery ScanSchemeRuleQuery) {
        List<ScanSchemeRuleEntity> scanSchemeRuleEntityList = scanSchemeRuleDao.findScanSchemeRuleList(ScanSchemeRuleQuery);

        List<ScanSchemeRule> scanSchemeRuleList = BeanMapper.mapList(scanSchemeRuleEntityList, ScanSchemeRule.class);
        joinTemplate.joinQuery(scanSchemeRuleList);

        return scanSchemeRuleList;
    }

    @Override
    public Pagination<ScanSchemeRule> findScanSchemeRulePage(ScanSchemeRuleQuery ScanSchemeRuleQuery) {
        Pagination<ScanSchemeRuleEntity>  pagination = scanSchemeRuleDao.findScanSchemeRulePage(ScanSchemeRuleQuery);

        List<ScanSchemeRule> scanSchemeRuleList = BeanMapper.mapList(pagination.getDataList(), ScanSchemeRule.class);
        joinTemplate.joinQuery(scanSchemeRuleList);

        return PaginationBuilder.build(pagination,scanSchemeRuleList);
    }

}