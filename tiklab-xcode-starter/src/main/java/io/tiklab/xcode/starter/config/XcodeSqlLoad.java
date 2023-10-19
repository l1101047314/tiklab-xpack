package io.tiklab.xcode.starter.config;

import io.tiklab.dal.dsm.config.model.DsmConfig;
import io.tiklab.dal.dsm.support.DsmConfigBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class XcodeSqlLoad {

    @Bean
    DsmConfig initDsmConfig() {
        DsmConfig dsmConfig = DsmConfigBuilder.instance();
        dsmConfig.newVersion("1.0.0", new String[]{
                //PrivilegeDsm
                "privilege_1.0.0",
                //UserDsm
                "user_1.0.0",
                "userCe_1.0.0",
                //IntegrationDsm
                "tool_1.0.0",
                //LicenceDsm
                "app-authorization_1.0.0",
                //MessageDsm
                "message_1.0.0",
                //SecurityDsm
                "oplog_1.0.0",
                //TodoTaskDsm
                "todotask_1.0.0",
                //xcode
                "xcode_1.0.0",
                "xdprivilege_1.0.0",
                "backups_1.0.0",
        });

        dsmConfig.newVersion("1.0.1", new String[]{
                "xcode_1.0.1",
                "xdprivilege_1.0.1"
        });
        dsmConfig.newVersion("1.0.2", new String[]{
                "xcode_1.0.2",
                "xdprivilege_1.0.2"
        });
        return dsmConfig;
    }
}
