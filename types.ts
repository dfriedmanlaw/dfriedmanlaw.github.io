import React from 'react';

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconPath: React.ReactNode;
  isFeatured?: boolean;
  content: {
    heroText: string;
    intro: string;
    sections: {
      title: string;
      content?: string;
      bullets?: { title: string; text: string }[];
    }[];
    resources: { title: string; slug: string }[];
    referral: {
      title: string;
      text: string;
    };
  };
}

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
  children?: NavItem[];
}

export interface DocketItem {
  id: number;
  text: string;
}