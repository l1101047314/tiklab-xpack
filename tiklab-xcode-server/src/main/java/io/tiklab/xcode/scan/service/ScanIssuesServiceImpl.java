package io.tiklab.xcode.scan.service;

import io.tiklab.beans.BeanMapper;
import io.tiklab.core.page.Pagination;
import io.tiklab.core.page.PaginationBuilder;
import io.tiklab.join.JoinTemplate;
import io.tiklab.rpc.annotation.Exporter;
import io.tiklab.xcode.scan.dao.ScanIssuesDao;
import io.tiklab.xcode.scan.entity.ScanIssuesEntity;
import io.tiklab.xcode.scan.model.ScanIssues;
import io.tiklab.xcode.scan.model.ScanIssuesQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.List;

/**
* ScanIssuesServiceImpl-扫描问题的记录接口实现
*/
@Service
@Exporter
public class ScanIssuesServiceImpl implements ScanIssuesService {

    @Autowired
    ScanIssuesDao scanIssuesDao;

    @Autowired
    JoinTemplate joinTemplate;

    @Override
    public String createScanIssues(@NotNull @Valid ScanIssues openRecord) {

        ScanIssuesEntity openRecordEntity = BeanMapper.map(openRecord, ScanIssuesEntity.class);
        openRecordEntity.setCreateTime(new Timestamp(System.currentTimeMillis()));
        String openRecordId= scanIssuesDao.createScanIssues(openRecordEntity);

        return openRecordId;
    }

    @Override
    public void updateScanIssues(@NotNull @Valid ScanIssues openRecord) {
        ScanIssuesEntity openRecordEntity = BeanMapper.map(openRecord, ScanIssuesEntity.class);

        scanIssuesDao.updateScanIssues(openRecordEntity);
    }

    @Override
    public void deleteScanIssues(@NotNull String id) {
        scanIssuesDao.deleteScanIssues(id);
    }

    @Override
    public void deleteScanIssuesByCondition(String key, String value) {

    }

    @Override
    public ScanIssues findOne(String id) {
        ScanIssuesEntity openRecordEntity = scanIssuesDao.findScanIssues(id);

        ScanIssues openRecord = BeanMapper.map(openRecordEntity, ScanIssues.class);
        return openRecord;
    }

    @Override
    public List<ScanIssues> findList(List<String> idList) {
        List<ScanIssuesEntity> openRecordEntityList =  scanIssuesDao.findScanIssuesList(idList);

        List<ScanIssues> openRecordList =  BeanMapper.mapList(openRecordEntityList, ScanIssues.class);
        return openRecordList;
    }

    @Override
    public ScanIssues findScanIssues(@NotNull String id) {
        ScanIssues openRecord = findOne(id);

        joinTemplate.joinQuery(openRecord);

        return openRecord;
    }

    @Override
    public List<ScanIssues> findAllScanIssues() {
        List<ScanIssuesEntity> openRecordEntityList =  scanIssuesDao.findAllScanIssues();

        List<ScanIssues> openRecordList =  BeanMapper.mapList(openRecordEntityList, ScanIssues.class);

        joinTemplate.joinQuery(openRecordList);

        return openRecordList;
    }

    @Override
    public List<ScanIssues> findScanIssuesList(ScanIssuesQuery ScanIssuesQuery) {
        List<ScanIssuesEntity> openRecordEntityList = scanIssuesDao.findScanIssuesList(ScanIssuesQuery);

        List<ScanIssues> openRecordList = BeanMapper.mapList(openRecordEntityList, ScanIssues.class);
        joinTemplate.joinQuery(openRecordList);

        return openRecordList;
    }

    @Override
    public Pagination<ScanIssues> findScanIssuesPage(ScanIssuesQuery ScanIssuesQuery) {
        Pagination<ScanIssuesEntity>  pagination = scanIssuesDao.findScanIssuesPage(ScanIssuesQuery);

        List<ScanIssues> openRecordList = BeanMapper.mapList(pagination.getDataList(), ScanIssues.class);
        joinTemplate.joinQuery(pagination.getDataList());

        return PaginationBuilder.build(pagination,openRecordList);
    }
}