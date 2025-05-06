import TeacherMetrics from "../../components/dash/TeacherMetrics";
import WeeklyClassChart from "../../components/dash/WeeklyClasschart";

import PageMeta from "../../components/common/PageMeta";
import RecentClass from "../../components/dash/RecentClass";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Home"
        description="//"
      />
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <div className="col-span-12 space-y-5 xl:col-span-7">
          <TeacherMetrics />

          <WeeklyClassChart />

          <RecentClass/>
        </div>
      </div>
    </>
  );
}
