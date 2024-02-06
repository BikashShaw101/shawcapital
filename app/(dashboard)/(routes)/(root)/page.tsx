import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import { getDasboardCourses } from "@/actions/get-dashboard-courses";

import { CheckCircle, Clock } from "lucide-react";
import { CoursesList } from "@/components/courses-list";
import { InfoCard } from "./_components/info-card";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const { completedCourses, coursesInProgress } = await getDasboardCourses(
    userId
  );
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <InfoCard
          icon={Clock}
          label={"In Progress"}
          numberOfItems={coursesInProgress.length}
        />
        <InfoCard
          variant="success"
          icon={CheckCircle}
          label={"Completed"}
          numberOfItems={completedCourses.length}
        />
        <CoursesList items={[...coursesInProgress, ...completedCourses]} />
      </div>
    </div>
  );
}
