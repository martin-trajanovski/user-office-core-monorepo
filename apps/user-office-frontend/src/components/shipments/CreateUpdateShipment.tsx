import { ShipmentFragment } from '@user-office-software-libs/shared-types';
import React from 'react';

import { ShipmentCore } from 'models/questionary/shipment/ShipmentCore';

import CreateShipment from './CreateShipment';
import UpdateShipment from './UpdateShipment';

type CreateUpdateShipmentProps = {
  onShipmentSubmitted?: (shipment: ShipmentCore) => void;
  onShipmentCreated?: (shipment: ShipmentCore) => void;
  scheduledEventId: number;
  shipment: ShipmentFragment | null;
};

function CreateUpdateShipment({
  onShipmentSubmitted,
  onShipmentCreated,
  scheduledEventId,
  shipment,
}: CreateUpdateShipmentProps) {
  return shipment ? (
    <UpdateShipment
      shipment={shipment}
      onShipmentSubmitted={onShipmentSubmitted}
    />
  ) : (
    <CreateShipment
      scheduledEventId={scheduledEventId}
      onShipmentSubmitted={onShipmentSubmitted}
      onShipmentCreated={onShipmentCreated}
    />
  );
}

export default CreateUpdateShipment;
