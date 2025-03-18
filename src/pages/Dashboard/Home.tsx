import EcommerceMetrics from "../../components/dash/TeacherMetrics";
import MonthlySalesChart from "../../components/dash/WeeklyClasschart";

import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Home"
        description="//"
      />
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <div className="col-span-12 space-y-5 xl:col-span-7">
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>
      </div>
    </>
  );
}
