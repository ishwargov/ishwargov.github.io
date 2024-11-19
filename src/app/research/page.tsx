import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { BlogCard } from "@/components/project-card";

export default function Page() {
    return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center gap-x-3 align-baseline leading-none print:hidden">
            <a href="/"><h2 className="font-mono text-sm hover:underline">About</h2></a>
            |
            <a href="/research"><h2 className="font-mono text-sm hover:underline">Research</h2></a>
        </div>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Papers</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3">
            {RESUME_DATA.posts.map((posts) => {
              return (
                <BlogCard
                  key={posts.title}
                  title={posts.title}
                  description={posts.description}
                  tags={posts.techStack}
                  link={"link" in posts ? posts.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>

        </section>
        <CommandMenu
            links={[
                {
                url: RESUME_DATA.personalWebsiteUrl,
                title: "Personal Website",
                },
                ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
                url: socialMediaLink.url,
                title: socialMediaLink.name,
                })),
        ]}
        />
    </main>
    );
}
