import React from 'react';
import ServiceDetailTemplate from '../components/common/ServiceDetailTemplate';
import servicesData from '../data/services';

export default function QaTesting() {
  const service = servicesData.find(s => s.id === 9);
  return <ServiceDetailTemplate service={service} />;
}
