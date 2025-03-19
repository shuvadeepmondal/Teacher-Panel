import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PrimarySub from "../../components/form/form-elements/PrimarySubject";
import Secondarysub from "../../components/form/form-elements/SencondarySubject";
import TextAreaInput from "../../components/form/form-elements/TextAreaInput";
import PageMeta from "../../components/common/PageMeta";

export default function SemesterSetup() {
  return (
    <div>
      <PageMeta
        title="Semester Setup"
        description="lorem ipsum"
      />
      <PageBreadcrumb pageTitle="Semester Setup" />
      <div className="">
        <div className="space-y-6">
          <PrimarySub />
          <Secondarysub />
          <TextAreaInput />
        </div>
      </div>
    </div>
  );
}
