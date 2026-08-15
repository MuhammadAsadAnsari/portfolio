import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { getServiceBySlug, services } from "@/lib/services";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return { title: "Service not found" };
  }
  return {
    title: `${service.title} | Asad Raza`,
    description: service.summary,
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
