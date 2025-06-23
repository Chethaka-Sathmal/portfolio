import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { TabletSmartphone, LaptopMinimal } from "lucide-react";
import ContactsList from "@/components/contacts-list";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-2xl mx-auto p-4">
        {/* Header */}
        <section className="flex flex-col gap-4 text-center mb-8">
          <h1 className="text-3xl md:text-4xl">Chethaka Sathmal</h1>
          <h2 className="text-md md:text-lg text-gray-600">
            Software developer based in Sri Lanka
          </h2>
        </section>
        {/* About me */}
        <section className="flex flex-col gap-4 mb-8 max-w-prose">
          <p className="leading-relaxed">
            Hello everyone 👋, I&apos;m a self driven novice software developer
            focusing on creating innovative software solutions for everyday
            problems
          </p>
          <p className="leading-relaxed">
            As a dedicated learner, I thrive on exploring new technologies and
            writing clean, efficient code. I&apos;m eager to collaborate with
            like-minded people and keep growing through hands-on work.
          </p>
          <p className="leading-relaxed">
            Looking forward to working with you 🤗
          </p>
        </section>
        {/* My services */}
        <section className="mb-8">
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
                Develop responsive websites using Next.js and React
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
                Experience in building mobile apps with React Native and Expo
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Contacts */}
        <ContactsList />
      </div>
    </div>
  );
}
