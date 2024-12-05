import { Tabs } from "~/components/ui/tabs";

export default function TabsVerticalDemo() {
  return (
    <Tabs.Root orientation="vertical" aria-label="E-Learning Platform">
      <Tabs.List>
        <Tabs.Trigger id="c">Courses</Tabs.Trigger>
        <Tabs.Trigger id="e">Exams</Tabs.Trigger>
        <Tabs.Trigger id="g">Grades</Tabs.Trigger>
        <Tabs.Trigger id="f">Forums</Tabs.Trigger>
        <Tabs.Trigger id="p">Profile</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content id="c">
        Enroll in courses and access learning materials on various subjects.
      </Tabs.Content>
      <Tabs.Content id="e">
        Take practice exams and quizzes to test your knowledge.
      </Tabs.Content>
      <Tabs.Content id="g">
        View your grades and track your academic progress.
      </Tabs.Content>
      <Tabs.Content id="f">
        Participate in discussion forums with other students and instructors.
      </Tabs.Content>
      <Tabs.Content id="p">
        Update your profile and customize your learning preferences.
      </Tabs.Content>
    </Tabs.Root>
  );
}
