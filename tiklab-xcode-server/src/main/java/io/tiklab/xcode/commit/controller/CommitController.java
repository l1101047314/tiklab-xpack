package io.tiklab.xcode.commit.controller;

import io.tiklab.xcode.commit.model.*;
import io.tiklab.xcode.commit.service.CommitServer;
import io.tiklab.core.Result;
import io.tiklab.postin.annotation.Api;
import io.tiklab.postin.annotation.ApiMethod;
import io.tiklab.postin.annotation.ApiParam;
import io.tiklab.xcode.commit.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/commit")
@Api(name = "CommitController",desc = "提交记录")
public class CommitController {

    @Autowired
    CommitServer commitServer;

    @RequestMapping(path="/findBranchCommit",method = RequestMethod.POST)
    @ApiMethod(name = "findBranchCommit",desc = "查询提交记录")
    @ApiParam(name = "rpyId",desc = "rpyId",required = true)
    public Result<List<CommitMessage>> findBranchCommit(@RequestBody @Valid @NotNull Commit commit){

        List<CommitMessage> allBranch = commitServer.findBranchCommit(commit);

        return Result.ok(allBranch);
    }

    @RequestMapping(path="/findLatelyBranchCommit",method = RequestMethod.POST)
    @ApiMethod(name = "findLatelyBranchCommit",desc = "最近一次提交记录")
    @ApiParam(name = "rpyId",desc = "rpyId",required = true)
    public Result<CommitMessage> findLatelyBranchCommit(@RequestBody @Valid @NotNull Commit commit){

        CommitMessage allBranch = commitServer.findLatelyBranchCommit(commit);

        return Result.ok(allBranch);
    }


    @RequestMapping(path="/findCommitFileDiffList",method = RequestMethod.POST)
    @ApiMethod(name = "findCommitDiffFileList",desc = "文件提交对比")
    @ApiParam(name = "commit",desc = "commitId",required = true)
    public Result<FileDiffEntry> findCommitDiffFileList(@RequestBody @Valid @NotNull Commit commit){

        FileDiffEntry commitFileDiffList = commitServer.findCommitDiffFileList(commit);

        return Result.ok(commitFileDiffList);
    }

    @RequestMapping(path="/findCommitFileDiff",method = RequestMethod.POST)
    @ApiMethod(name = "findCommitFileDiff",desc = "文件具体内容信息")
    @ApiParam(name = "commit",desc = "commitId",required = true)
    public Result< List<CommitFileDiff>> findCommitDiffFile(@RequestBody @Valid @NotNull Commit commit){

        List<CommitFileDiff> fileDiff = commitServer.findCommitFileDiff(commit);

        return Result.ok(fileDiff);
    }


    @RequestMapping(path="/findLikeCommitDiffFileList",method = RequestMethod.POST)
    @ApiMethod(name = "findCommitFileDiff",desc = "文件具体内容信息")
    @ApiParam(name = "commit",desc = "commitId",required = true)
    public Result<FileDiffEntry> findLikeCommitDiffFileList( @RequestBody @Valid @NotNull Commit commit){

        FileDiffEntry commitFileDiffList = commitServer.findLikeCommitDiffFileList(commit);

        return Result.ok(commitFileDiffList);
    }


    @RequestMapping(path="/findCommitLineFile",method = RequestMethod.POST)
    @ApiMethod(name = "findCommitLineFile",desc = "文件具体内容信息")
    @ApiParam(name = "commit",desc = "commitId",required = true)
    public Result< List<CommitFileDiff>> findCommitDiffFile( @RequestBody @Valid @NotNull CommitFile commit){

        List<CommitFileDiff> fileDiff = commitServer.findCommitLineFile(commit);

        return Result.ok(fileDiff);
    }



}









































