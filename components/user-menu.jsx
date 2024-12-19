"use client";

import { ChartNoAxesGantt } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';

const UserMenu = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-10 h-10",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="Dashboard"
          labelIcon={<ChartNoAxesGantt size={15} />}
          href="/dashboard"
        />
        <UserButton.Action label="manageAccount"/>
      </UserButton.MenuItems>
    </UserButton>
  );
}

export default UserMenu