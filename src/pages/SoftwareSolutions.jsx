import React from 'react';
import ServiceDetailTemplate from '../components/common/ServiceDetailTemplate';
import servicesData from '../data/services';

export default function SoftwareSolutions() {
  const service = servicesData.find(s => s.id === 4);
  return <ServiceDetailTemplate service={service} />;
}
