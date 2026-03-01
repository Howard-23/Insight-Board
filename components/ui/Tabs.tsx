"use client";

import { useId, useState } from "react";

type TabItem = {
  value: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  defaultValue?: string;
};

export function Tabs({ tabs, defaultValue }: TabsProps) {
  const generatedId = useId();
  const [active, setActive] = useState(defaultValue ?? tabs[0]?.value);
  const activeContent = tabs.find((tab) => tab.value === active)?.content;

  return (
    <div className="stack-md">
      <div role="tablist" aria-label="Tabs" className="tabs-list">
        {tabs.map((tab) => {
          const isActive = tab.value === active;
          return (
            <button
              type="button"
              key={tab.value}
              id={`${generatedId}-${tab.value}`}
              role="tab"
              className="tabs-trigger"
              aria-selected={isActive}
              aria-controls={`${generatedId}-${tab.value}-panel`}
              onClick={() => setActive(tab.value)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => {
        const isActive = tab.value === active;
        return (
          <div
            key={tab.value}
            id={`${generatedId}-${tab.value}-panel`}
            role="tabpanel"
            aria-labelledby={`${generatedId}-${tab.value}`}
            hidden={!isActive}
          >
            {isActive ? activeContent : null}
          </div>
        );
      })}
    </div>
  );
}
