import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { TabletSmartphone, LaptopMinimal } from "lucide-react";
import ContactsList from "@/components/contacts-list";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto my-15 p-4">
      {/* Header */}
      <section className="flex flex-col gap-4 text-center mb-12">
        <h1 className="text-3xl md:text-4xl">Chethaka Sathmal</h1>
        <h2 className="text-md md:text-lg text-gray-600">
          Software developer based in Sri Lanka
        </h2>
      </section>
      {/* About me */}
      <section className="flex flex-col gap-2 mb-12">
        <p>
          Hello everyone 👋, I&apos;m a self driven novice software developer
          focusing on creating innovative software solutions for everyday
          problems.
        </p>
        <p>Hope to hear from you soon 🤗</p>
      </section>
      {/* My services */}
      <section className="mb-12">
        <h3 className="font-semibold mb-4">My services</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="w-full">
            <CardHeader>
              <div className="flex flex-row items-center gap-4">
                <LaptopMinimal />
                <CardTitle>Web developer</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-600">
              Developed responsive websites using Next.js and React
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <div className="flex flex-row items-center gap-4">
                <TabletSmartphone />
                <CardTitle>Mobile app developer</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-600">
              Experience building mobile apps with React Native and Expo
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Contacts */}
      <ContactsList />
    </div>
  );
}
