import React from 'react';
import ServiceDetailTemplate from '../components/common/ServiceDetailTemplate';
import servicesData from '../data/services';

export default function Ecommerce() {
  const service = servicesData.find(s => s.id === 5);
  return <ServiceDetailTemplate service={service} />;
}
