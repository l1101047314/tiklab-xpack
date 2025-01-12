package io.thoughtware.gittok.scan.service;

import io.thoughtware.gittok.scan.model.ScanPlay;
import io.thoughtware.gittok.scan.model.ScanPlayQuery;
import io.thoughtware.gittok.scan.model.ScanRecord;
import io.thoughtware.gittok.scan.model.ScanRecordQuery;
import io.thoughtware.toolkit.beans.BeanMapper;
import io.thoughtware.core.page.Pagination;
import io.thoughtware.core.page.PaginationBuilder;
import io.thoughtware.dal.jpa.criterial.condition.DeleteCondition;
import io.thoughtware.dal.jpa.criterial.conditionbuilder.DeleteBuilders;
import io.thoughtware.toolkit.join.JoinTemplate;
import io.thoughtware.rpc.annotation.Exporter;


import io.thoughtware.gittok.repository.entity.RecordCommitEntity;
import io.thoughtware.gittok.scan.dao.ScanPlayDao;
import io.thoughtware.gittok.scan.entity.ScanPlayEntity;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
* ScanPlayServiceImpl-扫描计划接口实现
*/
@Service
@Exporter
public class ScanPlayServiceImpl implements ScanPlayService {

    @Autowired
    ScanPlayDao scanPlayDao;

    @Autowired
    JoinTemplate joinTemplate;

    @Autowired
    ScanRecordService scanRecordService;

    @Autowired
    ScanRecordInstanceService scanRecordInstanceService;

    @Override
    public String createScanPlay(@NotNull @Valid ScanPlay openRecord) {

        ScanPlayEntity openRecordEntity = BeanMapper.map(openRecord, ScanPlayEntity.class);
        openRecordEntity.setCreateTime(new Timestamp(System.currentTimeMillis()));
        String openRecordId= scanPlayDao.createScanPlay(openRecordEntity);

        return openRecordId;
    }

    @Override
    public void updateScanPlay(@NotNull @Valid ScanPlay openRecord) {
        ScanPlayEntity openRecordEntity = BeanMapper.map(openRecord, ScanPlayEntity.class);

        scanPlayDao.updateScanPlay(openRecordEntity);
    }

    @Override
    public void deleteScanPlay(@NotNull String id) {
        scanPlayDao.deleteScanPlay(id);

        //删除扫描记录
        scanRecordService.deleteScanRecordByCondition("scanPlayId",id);

        //删除扫描记录的实例
        scanRecordInstanceService.deleteScanRecordInstanceByCondition("scanPlayId",id);


    }

    @Override
    public void deleteScanPlayByCondition(String key, String value) {
        List<ScanPlay> scanPlayList = this.findScanPlayList(new ScanPlayQuery().setRepositoryId(value));
        if (CollectionUtils.isNotEmpty(scanPlayList)){
            for (ScanPlay scanPlay:scanPlayList){
                deleteScanPlay(scanPlay.getId());
            }
        }
    }

    @Override
    public ScanPlay findOne(String id) {
        ScanPlayEntity openRecordEntity = scanPlayDao.findScanPlay(id);

        ScanPlay openRecord = BeanMapper.map(openRecordEntity, ScanPlay.class);

        joinTemplate.joinQuery(openRecord);

        return openRecord;
    }

    @Override
    public List<ScanPlay> findList(List<String> idList) {
        List<ScanPlayEntity> openRecordEntityList =  scanPlayDao.findScanPlayList(idList);

        List<ScanPlay> openRecordList =  BeanMapper.mapList(openRecordEntityList, ScanPlay.class);

        return openRecordList;
    }

    @Override
    public ScanPlay findScanPlay(@NotNull String id) {
        ScanPlay openRecord = findOne(id);

        List<ScanRecord> recordList = scanRecordService.findScanRecordList(new ScanRecordQuery().setScanPlayId(id));
        if (CollectionUtils.isNotEmpty(recordList)){
            ScanRecord scanRecord = recordList.get(0);
            String name = StringUtils.isNotEmpty(scanRecord.getScanUser().getNickname()) ? scanRecord.getScanUser().getNickname() :
                    scanRecord.getScanUser().getName();
            openRecord.setUserName(name);
            openRecord.setLatScanTime(scanRecord.getCreateTime());
            int num = scanRecord.getSeverityTrouble() + scanRecord.getErrorTrouble() + scanRecord.getNoticeTrouble() + scanRecord.getSuggestTrouble();
            openRecord.setAllReqNum(num);
        }
        return openRecord;
    }

    @Override
    public List<ScanPlay> findAllScanPlay() {
        List<ScanPlayEntity> openRecordEntityList =  scanPlayDao.findAllScanPlay();

        List<ScanPlay> openRecordList =  BeanMapper.mapList(openRecordEntityList, ScanPlay.class);

        joinTemplate.joinQuery(openRecordList);

        return openRecordList;
    }

    @Override
    public List<ScanPlay> findScanPlayList(ScanPlayQuery ScanPlayQuery) {
        List<ScanPlayEntity> openRecordEntityList = scanPlayDao.findScanPlayList(ScanPlayQuery);

        List<ScanPlay> openRecordList = BeanMapper.mapList(openRecordEntityList, ScanPlay.class);
        joinTemplate.joinQuery(openRecordList);

        return openRecordList;
    }

    @Override
    public Pagination<ScanPlay> findScanPlayPage(ScanPlayQuery ScanPlayQuery) {
        Pagination<ScanPlayEntity>  pagination = scanPlayDao.findScanPlayPage(ScanPlayQuery);

        List<ScanPlay> openRecordList = BeanMapper.mapList(pagination.getDataList(), ScanPlay.class);
        joinTemplate.joinQuery(openRecordList);

        if (CollectionUtils.isNotEmpty(openRecordList)){
            for (ScanPlay scanPlay:openRecordList){
                List<ScanRecord> scanRecordList = scanRecordService.findScanRecordList(new ScanRecordQuery().setScanPlayId(scanPlay.getId()));
                if (CollectionUtils.isNotEmpty(scanRecordList)){
                    List<ScanRecord> scanRecords = scanRecordList.stream().sorted(Comparator.comparing(ScanRecord::getCreateTime).reversed()).collect(Collectors.toList());
                    ScanRecord scanRecord = scanRecords.get(0);
                    scanPlay.setScanTime(scanRecord.getCreateTime());
                    scanPlay.setScanWay(scanRecord.getScanWay());
                    if (StringUtils.isNotEmpty(scanRecord.getScanUser().getNickname())){
                        scanPlay.setUserName(scanRecord.getScanUser().getNickname());
                    }else {
                        scanPlay.setUserName(scanRecord.getScanUser().getName());
                    }
                    scanPlay.setScanResult(scanRecord.getScanResult());scanPlay.setScanObject(scanRecord.getScanObject());
                    scanPlay.setRecordId(scanRecord.getId());
                }
            }
        }

        return PaginationBuilder.build(pagination,openRecordList);
    }
}