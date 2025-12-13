"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  // Navigation
  const pathname = usePathname();

  // Variables
  const paths = pathname
    .split("/")
    .filter((path) => path !== "")
    .map((path) => path.replace(/-/, " "));
  
  return (
    <Breadcrumb>
      {/* Breadcrumb List */}
      <BreadcrumbList>
        {paths.map((path, index) => {
          return (
            <>

              {/* Breadcrumb Item */}
              {/* if index = 0 return dashboard link , if not arrive to end return Exam or id else return HTML Quiz OR Exam OR id*/}
              <BreadcrumbItem key={path}>
                {index === 0 ? (
                  <BreadcrumbLink asChild>
                    <Link href="/dashboard">Home</Link>
                  </BreadcrumbLink>
                ) : index !== paths.length - 1 ? (
                  
                  // Breadcrumb Link
                  <BreadcrumbLink asChild>
                    <Link href={`/${paths.slice(0, index).join("/")}`}>
                      {/^[0-9a-f]{24}$/i.test(path) ? "Exams" : path}
                    </Link>
                  </BreadcrumbLink>
                ) : (

                  // Breadcrumb Page
                  <BreadcrumbPage className="text-main">
                    {" "}
                    {path === "670070a830a3c3c1944a9c63"
                      ? "HTML Quiz"
                      : /^[0-9a-f]{24}$/i.test(path)
                      ? "Exams"
                      : path}{" "}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {paths.length - 1 !== index && (
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
              )}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
