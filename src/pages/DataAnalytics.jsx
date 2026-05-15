import React from 'react';
import ServiceDetailTemplate from '../components/common/ServiceDetailTemplate';
import servicesData from '../data/services';

export default function DataAnalytics() {
  const service = servicesData.find(s => s.id === 2);
  return <ServiceDetailTemplate service={service} />;
}
