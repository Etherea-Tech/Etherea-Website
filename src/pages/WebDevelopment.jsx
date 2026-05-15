import React from 'react';
import ServiceDetailTemplate from '../components/common/ServiceDetailTemplate';
import servicesData from '../data/services';

export default function WebDevelopment() {
  const service = servicesData.find(s => s.id === 8);
  return <ServiceDetailTemplate service={service} />;
}
