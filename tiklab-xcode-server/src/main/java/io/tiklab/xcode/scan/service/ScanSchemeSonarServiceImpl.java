package io.tiklab.xcode.scan.service;

import io.tiklab.beans.BeanMapper;
import io.tiklab.core.page.Pagination;
import io.tiklab.core.page.PaginationBuilder;
import io.tiklab.join.JoinTemplate;
import io.tiklab.rpc.annotation.Exporter;
import io.tiklab.xcode.scan.dao.ScanSchemeSonarDao;
import io.tiklab.xcode.scan.entity.ScanSchemeSonarEntity;
import io.tiklab.xcode.scan.model.ScanSchemeSonar;
import io.tiklab.xcode.scan.model.ScanSchemeSonarQuery;
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
* ScanSchemeSonarServiceImpl-扫描方案sonar 关系
*/
@Service
@Exporter
public class ScanSchemeSonarServiceImpl implements ScanSchemeSonarService {

    @Autowired
    ScanSchemeSonarDao scanSchemeSonarDao;

    @Autowired
    JoinTemplate joinTemplate;

    @Autowired
    ScanRecordService scanRecordService;

    @Override
    public String createScanSchemeSonar(@NotNull @Valid ScanSchemeSonar openRecord) {

        ScanSchemeSonarEntity openRecordEntity = BeanMapper.map(openRecord, ScanSchemeSonarEntity.class);
        openRecordEntity.setCreateTime(new Timestamp(System.currentTimeMillis()));
        String openRecordId= scanSchemeSonarDao.createScanSchemeSonar(openRecordEntity);

        return openRecordId;
    }

    @Override
    public void updateScanSchemeSonar(@NotNull @Valid ScanSchemeSonar openRecord) {
        ScanSchemeSonarEntity openRecordEntity = BeanMapper.map(openRecord, ScanSchemeSonarEntity.class);

        scanSchemeSonarDao.updateScanSchemeSonar(openRecordEntity);
    }

    @Override
    public void deleteScanSchemeSonar(@NotNull String id) {
        scanSchemeSonarDao.deleteScanSchemeSonar(id);
    }

    @Override
    public void deleteScanSchemeSonarByCondition(String key, String value) {

    }

    @Override
    public ScanSchemeSonar findOne(String id) {
        ScanSchemeSonarEntity openRecordEntity = scanSchemeSonarDao.findScanSchemeSonar(id);

        ScanSchemeSonar openRecord = BeanMapper.map(openRecordEntity, ScanSchemeSonar.class);
        return openRecord;
    }

    @Override
    public List<ScanSchemeSonar> findList(List<String> idList) {
        List<ScanSchemeSonarEntity> openRecordEntityList =  scanSchemeSonarDao.findScanSchemeSonarList(idList);

        List<ScanSchemeSonar> openRecordList =  BeanMapper.mapList(openRecordEntityList, ScanSchemeSonar.class);
        return openRecordList;
    }

    @Override
    public ScanSchemeSonar findScanSchemeSonar(@NotNull String id) {
        ScanSchemeSonar openRecord = findOne(id);

        joinTemplate.joinQuery(openRecord);

        return openRecord;
    }

    @Override
    public List<ScanSchemeSonar> findAllScanSchemeSonar() {
        List<ScanSchemeSonarEntity> openRecordEntityList =  scanSchemeSonarDao.findAllScanSchemeSonar();

        List<ScanSchemeSonar> openRecordList =  BeanMapper.mapList(openRecordEntityList, ScanSchemeSonar.class);

        joinTemplate.joinQuery(openRecordList);

        return openRecordList;
    }

    @Override
    public List<ScanSchemeSonar> findScanSchemeSonarList(ScanSchemeSonarQuery ScanSchemeSonarQuery) {
        List<ScanSchemeSonarEntity> openRecordEntityList = scanSchemeSonarDao.findScanSchemeSonarList(ScanSchemeSonarQuery);

        List<ScanSchemeSonar> openRecordList = BeanMapper.mapList(openRecordEntityList, ScanSchemeSonar.class);
        joinTemplate.joinQuery(openRecordList);

        return openRecordList;
    }

    @Override
    public Pagination<ScanSchemeSonar> findScanSchemeSonarPage(ScanSchemeSonarQuery ScanSchemeSonarQuery) {
        Pagination<ScanSchemeSonarEntity>  pagination = scanSchemeSonarDao.findScanSchemeSonarPage(ScanSchemeSonarQuery);

        List<ScanSchemeSonar> openRecordList = BeanMapper.mapList(pagination.getDataList(), ScanSchemeSonar.class);
        joinTemplate.joinQuery(pagination.getDataList());

        return PaginationBuilder.build(pagination,openRecordList);
    }
}