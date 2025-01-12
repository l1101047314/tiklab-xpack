package io.thoughtware.gittok.scan.model;

import io.thoughtware.core.order.Order;
import io.thoughtware.core.order.OrderBuilders;
import io.thoughtware.core.page.Page;
import io.thoughtware.postin.annotation.ApiModel;
import io.thoughtware.postin.annotation.ApiProperty;

import java.util.List;

@ApiModel
public class ScanSchemeRuleQuery {

    @ApiProperty(name ="orderParams",desc = "排序参数")
    private List<Order> orderParams = OrderBuilders.instance().asc("problemLevel").get();

    @ApiProperty(name ="pageParam",desc = "分页参数")
    private Page pageParam = new Page();

    private String scanSchemeId;

    private String schemeRulesetId;

    public List<Order> getOrderParams() {
        return orderParams;
    }

    public void setOrderParams(List<Order> orderParams) {
        this.orderParams = orderParams;
    }

    public Page getPageParam() {
        return pageParam;
    }

    public void setPageParam(Page pageParam) {
        this.pageParam = pageParam;
    }

    public String getScanSchemeId() {
        return scanSchemeId;
    }

    public ScanSchemeRuleQuery setScanSchemeId(String scanSchemeId) {
        this.scanSchemeId = scanSchemeId;
        return this;
    }

    public String getSchemeRulesetId() {
        return schemeRulesetId;
    }

    public ScanSchemeRuleQuery setSchemeRulesetId(String schemeRulesetId) {
        this.schemeRulesetId = schemeRulesetId;
        return this;
    }
}
