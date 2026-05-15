import React from 'react';
import ServiceDetailTemplate from '../components/common/ServiceDetailTemplate';
import servicesData from '../data/services';

export default function MobileApps() {
  const service = servicesData.find(s => s.id === 7);
  return <ServiceDetailTemplate service={service} />;
}
