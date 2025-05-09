import * as React from 'react';
import { Outlet } from 'react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import SidebarFooterAccount from '../SidebarFooterAccount';

export default function Layout() {
  return (
    <DashboardLayout
      defaultSidebarCollapsed
      sidebarExpandedWidth={250}
      slots={{
        toolbarAccount: () => null,
        sidebarFooter: SidebarFooterAccount,
      }}
    >
      <Outlet />
    </DashboardLayout>
  );
}
