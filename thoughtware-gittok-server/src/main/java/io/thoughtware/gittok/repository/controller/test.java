package io.thoughtware.gittok.repository.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.eclipse.jgit.internal.storage.file.PackFile;
import org.eclipse.jgit.lib.*;
import org.eclipse.jgit.revwalk.*;
import org.eclipse.jgit.transport.RemoteConfig;
import org.eclipse.jgit.transport.URIish;
import org.eclipse.jgit.treewalk.TreeWalk;

import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

public class test {

    public static void main(String[] args) throws IOException, ParseException {


        try {


            String jsonString = "{\"_id\":\"bytewise-core\",\"_rev\":\"11-69581e869d1917853984be117a92c068\",\"name\":\"bytewise-core\",\"description\":\"Binary serialization of arbitrarily complex structures that sort element-wise\",\"dist-tags\":{\"latest\":\"1.2.3\"},\"versions\":{\"1.0.0\":{\"maintainers\":[{\"name\":\"deanlandolt\",\"email\":\"dean@deanlandolt.com\"}],\"dist\":{\"shasum\":\"653f08fe684700611d5dfa00e10beee8b91b387b\",\"tarball\":\"https://registry.npmjs.org/bytewise-core/-/bytewise-core-1.0.0.tgz\",\"integrity\":\"sha512-XM2I3/jx62HbW4FqtfCWwgBjZujfn3PJN3ftZp352BRD2dQfJbG+cSpdCnfDQnXGwqtSTRjZOZTm7uealGMrng==\",\"signatures\":[{\"keyid\":\"SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA\",\"sig\":\"MEYCIQCj4n9ox7svx6DVqdEdju6n2GD8lqhJ+3vpWZWQd7NyOgIhAOf7BwL6v0V70HICWscjjBBeVchzCMi9hqOyQxll0wYN\"}]},\"directories\":{}}}}";

        // 解析JSON字符串为JSONObject
          JSONObject jsonObject = JSON.parseObject(jsonString);

        // 替换tarball字段的值
            jsonObject.getJSONObject("versions").getJSONObject("1.0.0").getJSONObject("dist").put("tarball", "http://172.13.1.11:8081/repository/npm-public/bytewise-core/-/bytewise-core-1.0.0.tgz");

        // 将Java对象转换为JSON字符串
            String updatedJsonString = jsonObject.toJSONString();

            System.out.println(updatedJsonString);



        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}


