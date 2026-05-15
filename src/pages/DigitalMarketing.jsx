import React from 'react';
import ServiceDetailTemplate from '../components/common/ServiceDetailTemplate';
import servicesData from '../data/services';

export default function DigitalMarketing() {
  const service = servicesData.find(s => s.id === 10);
  return <ServiceDetailTemplate service={service} />;
}
