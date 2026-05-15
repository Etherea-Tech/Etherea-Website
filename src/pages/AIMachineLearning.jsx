import React from 'react';
import ServiceDetailTemplate from '../components/common/ServiceDetailTemplate';
import servicesData from '../data/services';

export default function AIMachineLearning() {
  const service = servicesData.find(s => s.id === 1);
  return <ServiceDetailTemplate service={service} />;
}
