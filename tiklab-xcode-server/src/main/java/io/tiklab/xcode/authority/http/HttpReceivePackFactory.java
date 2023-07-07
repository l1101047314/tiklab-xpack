package io.tiklab.xcode.authority.http;

import org.eclipse.jgit.lib.Repository;
import org.eclipse.jgit.transport.ReceivePack;
import org.eclipse.jgit.transport.resolver.ReceivePackFactory;
import org.eclipse.jgit.transport.resolver.ServiceNotAuthorizedException;
import org.eclipse.jgit.transport.resolver.ServiceNotEnabledException;

import javax.servlet.http.HttpServletRequest;

/**
 * 实现git-receive-pack钩子
 */
public   class HttpReceivePackFactory implements ReceivePackFactory<HttpServletRequest> {


    @Override
    public ReceivePack create(HttpServletRequest req, Repository db)
            throws ServiceNotEnabledException, ServiceNotAuthorizedException {

        return   new ReceivePack(db);
    }
}