import React from 'react';
import ServiceDetailTemplate from '../components/common/ServiceDetailTemplate';
import servicesData from '../data/services';

export default function SaasProducts() {
  const service = servicesData.find(s => s.id === 3);
  return <ServiceDetailTemplate service={service} />;
}
