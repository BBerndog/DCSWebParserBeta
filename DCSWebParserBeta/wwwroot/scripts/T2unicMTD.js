<?xml version="1.0" encoding="UTF-8"?> <!-- -*- nxml -*- -->
<mtd16>
  <!--Command Messages-->
  <tag name="Ping" id="0xD001"/>
  <tag name="Pong" id="0xE001"/>

  <tag name="Capabilities" id="0xD002"/>
  <tag name="CapabilitiesResponse" id="0xE002"/>

  <tag name="StatusReport" id="0xD800"/>
  <tag name="StatusReportResponse" id="0xE800"/>

  <tag name="RemoteControl" id="0xD801"/>
  <tag name="RemoteControlResponse" id="0xE801"/>

  <tag name="PrintReceipt" id="0xD802"/>
  <tag name="PrintReceiptResponse" id="0xE802"/>

  <tag name="TicketExit" id="0xD803"/>
  <tag name="TicketExitResponse" id="0xE803"/>

  <tag name="QueryPrice" id="0xD804"/>
  <tag name="QueryPriceResponse" id="0xE804"/>

  <tag name="CreditcardTransaction" id="0xD805"/>
  <tag name="CreditcardTransactionResponse" id="0xE805"/>

  <tag name="CancelSession" id="0xD806"/>
  <tag name="CancelSessionResponse" id="0xE806"/>

  <tag name="CredentialAttempt" id="0xD807"/>
  <tag name="CredentialAttemptResponse" id="0xE807"/>

  <tag name="LogEvent" id="0xD808"/>
  <tag name="LogEventResponse" id="0xE808"/>

  <tag name="QuerySetup" id="0xD809"/>
  <tag name="QuerySetupResponse" id="0xE809"/>

  <tag name="ChangeSetup" id="0xD80A"/>
  <tag name="ChangeSetupResponse" id="0xE80A"/>

  <tag name="QueryStatus" id="0xD80B"/>
  <tag name="QueryStatusResponse" id="0xE80B"/>

  <tag name="QueryCashInfo" id="0xD80C"/>
  <tag name="QueryCashInfoResponse" id="0xE80C"/>

  <tag name="SetupCash" id="0xD80D"/>
  <tag name="SetupCashResponse" id="0xE80D"/>

  <tag name="SessionFinished" id="0xD80E"/>
  <tag name="SessionFinishedResponse" id="0xE80E"/>

  <tag name="QueryStatistics" id="0xD80F"/>
  <tag name="QueryStatisticsResponse" id="0xE80F"/>

  <tag name="Session" id="0xD810"/>
  <tag name="SessionResponse" id="0xE810"/>

  <tag name="IssueTicket" id="0xD811"/>
  <tag name="IssueTicketResponse" id="0xE811"/>

  <tag name="ServiceCommand" id="0xD812"/>
  <tag name="ServiceCommandResponse" id="0xE812"/>

  <tag name="DisplayMessage" id="0xD813"/>
  <tag name="DisplayMessageResponse" id="0xE813"/>

  <tag name="QueryCustomer" id="0xD815"/>
  <tag name="QueryCustomerResponse" id="0xE815"/>

  <tag name="CCStatus" id="0xF8C0"/>
  <tag name="CCSetEnabled" id="0xD8C1"/>
  <tag name="CCSetEnabledResponse" id="0xE8C1"/>
  <tag name="CCTransaction" id="0xD8C2"/>
  <tag name="CCTransactionResponse" id="0xE8C2"/>
  <tag name="CCCancel" id="0xF8C2"/>
  <tag name="CCGetTransactionResult" id="0xD8C3"/>
  <tag name="CCGetTransactionResultResponse" id="0xE8C3"/>

  <tag name="InstallFirmware" id="0xD8F7"/>
  <tag name="InstallFirmwareResponse" id="0xE8F7"/>
  <tag name="InstallFirmwareStatus" id="0xF8F7"/>

  <tag name="FileAccess" id="0xD8F8"/>
  <tag name="FileAccessResponse" id="0xE8F8"/>
  <tag name="FileData" id="0xF8F8"/>
  <tag name="FileClose" id="0xD8F9"/>
  <tag name="FileCloseResponse" id="0xE8F9"/>

  <tag name="MagicPacket" id="0xFFFF"/>

  <!--Generic tags -->
  <tag name="StatusCode" id="0x1000" comment="Result status code" display="4x">
    <enums>
      <enum name="Success" id="0x0000" comment="Indicate success"/>
      <enum name="OperationInProgress" id="0x0001" comment="Operation needs more time to complete"/>
      <enum name="Error" id="0x0002" comment="Generic failure code"/>
      <enum name="Denied" id="0x0003" comment="Generic reject code"/>
      <enum name="Disabled" id="0x0004" comment="The queried feature is disabled"/>
      <enum name="Busy" id="0x0005" comment="Busy"/>
      <enum name="More" id="0x0006" comment="More information required"/>
      <enum name="IssueTicket" id="0x0007" comment="Issue a ticket"/>
      <enum name="Canceled" id="0x0008" comment="Generic canceled code"/>
      <enum name="PleaseWait" id="0x0009" comment="Human intervention required, please wait"/>
      <enum name="NotFound" id="0x000A" comment="No data found for request"/>

      <enum name="InvalidIdent" id="0x1201" comment="Credential identification invalid"/>
      <enum name="InvalidFacility" id="0x1202" comment="Facility (Site) number of credential is invalid"/>
      <enum name="InvalidStation" id="0x1203" comment="Station (Lane) number of credential is invalid"/>
      <enum name="Expired" id="0x1204" comment="Credential is expired"/>
      <enum name="OutOfDayzone" id="0x1205" comment="Access denied, outside of allowed day zone"/>
      <enum name="OutOfTimezone" id="0x1206" comment="Access denied, outside of allowed time zone"/>
      <enum name="OutOfBalance" id="0x1207" comment="Credential is out of balance"/>
      <enum name="AntipassbackViolation" id="0x1208" comment="Antipassback rule violated"/>
      <enum name="NestingTimeout" id="0x1209" comment="Timeout while being in nesting area"/>
      <enum name="NestingNotAllowed" id="0x120A" comment="Vehicle is not allowed inside nesting area"/>
      <enum name="NotPaid" id="0x120B" comment="Fee not paid."/>
      <enum name="InvalidTicket" id="0x120C" comment="Ticket not accepted."/>
      <enum name="LotFullDenied" id="0x120D" comment="Lot full for access type."/>
      <enum name="ProceedExit" id="0x120E" comment="Credential response for credential scanned at APS (typically for zero dollar amount)."/>

      <enum name="FirmwareApplicationMismatch" id="0xFF00" comment="Application name does not match currently installed application"/>
      <enum name="FirmwareDowngradeDenied" id="0xFF01" comment="Downgrade denied (e.g. because it would remove remote update capability.)"/>
      <enum name="FirmwareFallbackUnsupported" id="0xFF02" comment="MBR code does not support fallback to last-known-good"/>
      <enum name="FirmwareFileAccessError" id="0xFF03" comment="Error accessing the firmware file"/>
      <enum name="FirmwareFileInvalid" id="0xFF04" comment="Not a valid firmware file"/>
      <enum name="FirmwareFilenameMustEndInC4F" id="0xFF05" comment="Firmware filename must end in .c4f"/>
      <enum name="FirmwareFileNotSpecified" id="0xFF06" comment="No firmware file specified"/>
      <enum name="FirmwareHardwareMismatch" id="0xFF07" comment="Hardware architecture in firmware file does not match actual hardware"/>
      <enum name="FirmwareInstallFailed" id="0xFF08" comment="Install program failed to install the firmware"/>

      <enum name="Todo" id="0xFFFD" comment="Implementation not yet done"/>
      <enum name="Missing" id="0xFFFE" comment="Error information not known"/>
      <enum name="NotImplemented" id="0xFFFF" comment="Message not implemented"/>
    </enums>
  </tag>
  <tag name="StatusText" id="0x3000" comment="Text describing a status code"/>
  <tag name="SystemName" id="0x3001" comment="Arbitrary name of this station"/>
  <tag name="KeyValueList" id="0xC000" comment="Generic list with Key/Text pairs"/>
  <tag name="Position" id="0x8000" comment="Generic X/Y coordinate"/>
  <tag name="Rectangle" id="0x8100" comment="Generic rectangle specification (X.Y,W,H)"/>
  <tag name="Size" id="0x8200" comment="Generic width/height specification"/>
  <tag name="DisplaySize" id="0x8201" comment="Width/height of display hardware"/>
  <tag name="CanvasSize" id="0x8202" comment="Width/height of display area being used"/>
  <tag name="Barcode" id="0x3504" comment="Barcode"/>
  <tag name="BarcodeText" id="0x3503" comment="Text to print below barcode"/>
  <tag name="BarcodeIndex" id="0x1504" comment="Used to distinguish between multiple barcodes"/>
  <tag name="BarcodeEx" id="0xF504" comment="Nested structure with complete barcode specification: Type, Position, Size, Text"/>
  <tag name="BarcodeName" id="0x3502" comment="Barcode Type Name (e.g. QR, PDF417, EAN, ...)"/>
  <tag name="BarcodeECC" id="0x1502" comment="Error correction level for QR code (0=automatic, 1..4 = L,M,Q,H)"/>
  <tag name="BarcodeVersion" id="0x1503" comment="Version code for QR code (0=automatic, 1..40=force version)"/>
  <tag name="Ident" id="0x3505" comment="Identity string, e.g. Barcode, RFID, ..."/>
  <tag name="Count" id="0x1330" comment="Count"/>
  <tag name="ControlCode" id="0x1333" comment="Code on the control card">
    <enums>
      <enum name="Cancel" id="-1"/>
      <enum name="Status" id="901"/>
      <enum name="Summary" id="902"/>
      <enum name="Fill" id="903"/>
      <enum name="Clear" id="904"/>
      <enum name="Service" id="906"/>
      <enum name="ManualFill" id="910"/>
      <enum name="Maintenance" id="912"/>
    </enums>
  </tag>
  <tag name="ControlIndex" id="0x1334" comment="Distinguish between multiple control cards of the same ControlCode"/>
  <tag name="Currency" id="0x3340" comment="Three letter currency name (ISO4217)"/>
  <tag name="Currency2" id="0x3341" comment="Secondary currency name (ISO4217)"/>
  <tag name="CurrencyRate" id="0x1344" comment="1 &lt;Currency2&gt; = &lt;CurrencyRate&gt;/100000 &lt;Currency&gt;"/>
  <tag name="Data" id="0x0500" comment="Generic binary data field"/>
  <tag name="EncryptedData" id="0x0501" comment="Generic binary data field for encrypted data" secure="true"/>
  <tag name="Hash" id="0x0502" comment="Generic data hash / message digest, e.g. MD5, SHA, ..."/>
  <tag name="Enabled" id="0x2500" comment="Generic enable flag"/>
  <tag name="HasCard" id="0x2501" comment="Flag indicating the presence of a card inside a card device"/>
  <tag name="Inverted" id="0x2502" comment="Flag indicating a bit flip"/>
  <tag name="Changed" id="0x2503" comment="Generic changed flag"/>
  <tag name="Duration" id="0x1345" comment="Generic time duration (ms)"/>
  <tag name="DeviceSerialNumber" id="0x3322"/>
  <tag name="DeviceManufactureDate" id="0x6322"/>
  <tag name="DeviceManufacturer" id="0x3323"/>
  <tag name="DeviceModel" id="0x3324"/>
  <tag name="DeviceID" id="0x3325"/>
  <tag name="DeviceStatus" id="0x7F70"/>
  <tag name="Enable" id="0x704E"/>
  <tag name="EventCode" id="0x1F92" display="6x">
    <enums>
      <enum name="SystemStartup" id="0x000000" comment="System startup"/>
      <enum name="MemoryCleared" id="0x000001" comment="Nonvolatile memory cleared"/>
      <enum name="SetupChanged" id="0x000002" comment="Local setup has been modified"/>

      <enum name="PassTicket" id="0x000101" comment="Patron passed gate with a ticket"/>
      <enum name="PassIssue" id="0x000102" comment="Patron passed gate after a ticket was issued to patron"/>
      <enum name="PassKeycard" id="0x000104" comment="Passed with a keycard"/>
      <enum name="PassEvent" id="0x000105" comment="Passed with an event ticket"/>
      <enum name="PassIllegalForward" id="0x000106" comment="Illegal pass in normal direction"/>
      <enum name="PassIllegalReverse" id="0x000107" comment="Illegal pass in reverse direction"/>
      <enum name="PassAccess" id="0x000108" comment="Pass granted by external access pulse input"/>
      <enum name="PassPayment" id="0x000109" comment="Passed with direct payment (credit or cash)"/>
      <enum name="PassCreditcard" id="0x00010A" comment="Passed, identified by creditcard"/>
      <enum name="PassFree" id="0x00010B" comment="Unconditional free pass (FreePass mode set to true in configuration)"/>
      <enum name="PassRemote" id="0x00010C" comment="Pass granted by GrantAccess remote command"/>

      <enum name="TicketPaid" id="0x000140" comment="Ticket has been paid at a paystation"/>
      <enum name="TicketIssued" id="0x000141" comment="Ticket has been issued at a paystation"/>
      <enum name="LatePlateData" id="0x000142" comment="License plate data scanned after session finished"/>

      <enum name="TicketStolen" id="0x000180" comment="Ticket hasbeen issued and taken from issuer but no pass registered"/>
      <enum name="SessionCanceled" id="0x000181" comment="Patron has aborted payment"/>
      <enum name="InvalidTicket" id="0x000182" comment="Ticket could not be accepted"/>
      <enum name="PaymentFailed" id="0x000183" comment="Cashless payment attempt failed"/>
      <enum name="UnexpectedCashlessTransaction" id="0x000184" comment="Terminal reported cashless transaction while idle."/>
      <enum name="SessionFailed" id="0x000185" comment="Session did not complete successfully"/>

      <enum name="ReceiptPrinted" id="0x000202" comment="Logs contents of printed receipt data"/>
      <enum name="DoorState" id="0x000203" comment="Mechanical door lock state information"/>
      <enum name="AlarmState" id="0x000204" comment="Alarm state information"/>
      <enum name="ControlCardUsed" id="0x000205" comment="A control card has been read."/>
      <enum name="ControlReport" id="0x000206" comment="A control operation has finished."/>
      <enum name="GateOpened" id="0x000207" comment="Gate has opened"/>
      <enum name="GateClosed" id="0x000208" comment="Gate has closed"/>

      <enum name="DeviceEvent" id="0x000280" comment="Device specific event. Further specified by EventDevice, EventDeviceCode and EventSubcode"/>

      <enum name="FirmwareInstallStarted" id="0x0002C0" comment="Firmware installation started"/>
      <enum name="FirmwareInstallFinished" id="0x0002C1" comment="Firmware installation finished"/>

      <enum name="MoneyToCashbox" id="0x000300" comment="Money routed from patron to cashbox"/>
      <enum name="MoneyToChange" id="0x000301" comment="Money routed from patron to change (hopper/tube/cassette)"/>
      <enum name="MoneyDispensed" id="0x000302" comment="Money paid to patron"/>
      <enum name="MoneyUnloaded" id="0x000303" comment="Money routed from change (hopper/tube/casssette) to cashbox"/>

      <enum name="Todo" id="0xFFFFFD" comment="Implementation not yet done"/>
      <enum name="Missing" id="0xFFFFFE" comment="Error information not known"/>
      <enum name="NotImplemented" id="0xFFFFFF" comment="Message not implemented"/>
    </enums>
  </tag>
  <tag name="EventDevice" id="0x1F90" display="4x">
    <enums>
      <enum name="ReceiptPrinter" id="0x0001"/>
      <enum name="Verifier" id="0x0002"/>
      <enum name="CardReader" id="0x0003"/>
      <enum name="RfidReader" id="0x0004"/>
      <enum name="Cashbox" id="0x0010"/>
      <enum name="CoinDevice" id="0x0011"/>
      <enum name="BillDevice" id="0x0012"/>
      <enum name="CoinPayoutDevice" id="0x0013"/>
      <enum name="BillPayoutDevice" id="0x0014"/>
      <enum name="EEMio" id="0x0020"/>
      <enum name="FPMio" id="0x0021"/>
      <enum name="DeviceTunnel" id="0x0030"/>
    </enums>
  </tag>
  <tag name="EventDeviceCode" id="0x1F95" display="4x"/>
  <tag name="EventSubcode" id="0x1F93" display="2x"/>
  <tag name="EventType" id="0x1F91">
    <enums>
      <enum name="Info" id="0"/>
      <enum name="Warning" id="1"/>
      <enum name="Error" id="2"/>
      <enum name="UnrecoverableError" id="3"/>

      <enum name="Gray" id="10" comment="State is unknown"/>
      <enum name="Green" id="11" comment="Working normally"/>
      <enum name="Yellow" id="12" comment="Still working, but might need attention"/>
      <enum name="Red" id="13" comment="Error condition"/>
    </enums>
  </tag>
  <tag name="EventNumber" id="0x1F94"/>
  <tag name="Index" id="0x1335"/>
  <tag name="Type" id="0x133C"/>
  <tag name="IndexedData" id="0xC500"/>
  <tag name="Key" id="0x3335"/>
  <tag name="Amount" id="0x1340"/>
  <tag name="MaxAmount" id="0x1342"/>
  <tag name="MaxCount" id="0x133B"/>
  <tag name="Tail" id="0xF33B"/>
  <tag name="MinAmount" id="0x1341"/>
  <tag name="MinCount" id="0x133A"/>
  <tag name="Head" id="0xF33A"/>
  <tag name="Name" id="0x3030" comment="Any name"/>
  <tag name="BusinessName" id="0x3031" comment="Company/Business Name"/>
  <tag name="Price" id="0x1347" comment="Price before discounts, surcharges and taxes"/>
  <tag name="ProtocolVersion" id="0x1100"/>
  <tag name="SequenceNumber" id="0x1336" comment="Unique sequence number"/>
  <tag name="TimeInterval" id="0x1337"/>
  <tag name="TimeStamp" id="0x6337"/>
  <tag name="Tier" id="0x1338" comment="Grouping tag"/>
  <tag name="LegacyIndex" id="0x1339"/>
  <tag name="SoftwareName" id="0x3101" comment="e.g. „Parking Firmware“"/>
  <tag name="SoftwareOs" id="0x3100" comment="e.g. „Core4“"/>
  <tag name="SoftwareFeatures" id="0x1102" comment="Feature bits">
    <bits>
      <bit name="AlwaysUseSessionFinished" id="0" comment="DEPRECATED. DO NOT USE IN NEW CODE."/>
      <bit name="NoIdInEveryMessage" id="1" comment="Do not repeat station identifying information in every message"/>
      <bit name="EnableSessionFinished" id="2" comment="All payment sessions include a SessionFinished exchange"/>
    </bits>
  </tag>
  <tag name="SoftwareVersion" id="0x3102" comment="Application code version e.g. 99.99.99#9999"/>
  <tag name="SoftwareBuildDate" id="0x6102" comment="Build date of application code"/>
  <tag name="ModelNumber" id="0x3103"/>
  <tag name="SDKVersion" id="0x3104" comment="SDK code version e.g. 99.99.99#9999"/>
  <tag name="SDKBuildDate" id="0x6104" comment="Build date of SDK code"/>
  <tag name="MBRVersion" id="0x3105" comment="Bootup code version e.g. 99.99.99#9999"/>
  <tag name="MBRBuildDate" id="0x6105" comment="Build date of bootup code"/>
  <tag name="Uptime" id="0x1106" comment="Time the application has been running (seconds)"/>
  <tag name="Text" id="0x3500" comment="Generic text field"/>
  <tag name="XML" id="0x3506" comment="Generic XML data field"/>
  <tag name="JSON" id="0x3507" comment="Generic JSON data field"/>
  <tag name="Track1" id="0x3053" comment="Track 1 magstripe data"/>
  <tag name="Track2" id="0x3054" comment="Ditto, track 2."/>
  <tag name="Track3" id="0x3055" comment="Ditto, track 3."/>
  <tag name="Hash1" id="0x0053" comment="Track 1 hashed data"/>
  <tag name="Hash2" id="0x0054" comment="Ditto, track 2."/>
  <tag name="Hash3" id="0x0055" comment="Ditto, track 3."/>
  <tag name="TransponderID" id="0x3056" comment="Serial number of a RFID tag"/>
  <tag name="TransponderType" id="0x1056">
    <enums>
      <enum name="Undefined" id="-1"/>
    </enums>
  </tag>
  <tag name="Encrypted1" id="0x0057" comment="Track 1 encrypted data" secure="true"/>
  <tag name="Encrypted2" id="0x0058" comment="Ditto, track 2." secure="true"/>
  <tag name="Encrypted3" id="0x0059" comment="Ditto, track 3." secure="true"/>
  <tag name="UserNumber" id="0x1132" comment="User ID"/>
  <tag name="ImageData" id="0x0133" comment="File contents of a graphical image. e.g. PNG, BMP, GIF. Beware message size limit of 64k."/>
  <tag name="ImageFileName" id="0x3133" comment="File name of a graphical image."/>
  <tag name="FileOperation" id="0x1134" comment="Used with FileAccess messages">
    <enums>
      <enum name="Read" id="0"/>
      <enum name="Write" id="1"/>
      <enum name="List" id="2"/>
      <enum name="Delete" id="3"/>
      <enum name="Wipe" id="4"/>
      <enum name="MakeDir" id="5"/>
    </enums>
  </tag>
  <tag name="FileHandle" id="0x1135" comment="Supports working with multiple files"/>
  <tag name="USBVendorID" id="0x1136" comment="USB numeric vendor ID" display="4x"/>
  <tag name="USBProductID" id="0x1137" comment="USB numeric product ID" display="4x"/>
  <tag name="USBDeviceName" id="0x3138" comment="Lua expression pattern for matching a USB device name"/>

  <tag name="ValueDue" id="0x1343" comment="Generic item indicating a monetary value. Preferrably used for money going from customer to machine."/>
  <tag name="Value" id="0x1348" comment="Generic item indicating a monetary value"/>

  <tag name="TaxID" id="0x334A" comment="Customer's Tax Identifier (Country specific)"/>

  <tag name="ValuePaid" id="0x1349" comment="Amount moved from patron to machine, after change has been given."/>
  <tag name="ValueOfRefund" id="0x134B" comment="Amount that was paid above AmountDue, but could not be given back as change."/>
  <tag name="ValueInserted" id="0x134C" comment="Total amount inserted by patron, not considering change."/>
  <tag name="ValueOfChange" id="0x134D" comment="Amount of change returned."/>
  <tag name="ValueOfRefundTotal" id="0x1353" comment="Amount of Refund 'IOU' receipts already given out."/>

  <tag name="RefundID" id="0x134E" comment="Counted up each time change could not be given. Printed on receipt."/>
  <tag name="ReceiptID" id="0x134F" comment="Counted up each time the machine generates a customer receipt locally."/>
  <tag name="PrintoutID" id="0x1350" comment="Counted up for each print job."/>
  <tag name="FillID" id="0x1351" comment="Counted up each time the machine is filled."/>
  <tag name="SummaryID" id="0x1352" comment="Counted each time a summary report is requested."/>
  <tag name="SessionID" id="0x0000" comment="Opaque session ID."/>

  <tag name="PrivateKey" id="0x00F0" comment="SSL Private/Public Key Pair" secure="true"/>
  <tag name="Certificate" id="0x00F1" comment="SSL Certificate File"/>

  <!-- Parking system specific tags -->
  <tag name="FacilityNumber" id="0x1600" comment="Facility the station and server belong to."/>
  <tag name="EntryStationNumber" id="0x1601" comment="Station number where the patron has entered the premises."/>
  <tag name="ExitStationNumber" id="0x1602" comment="Ditto, for leaving the premises."/>
  <tag name="PaymentStationNumber" id="0x1603" comment="Number of the station where the ticket was paid"/>
  <tag name="TicketNumber" id="0x1604" comment="Parking ticket number."/>
  <tag name="TransactionNumber" id="0x1605" comment="Parking ticket number."/>
  <tag name="TicketState" id="0x1606" comment="State of ticket (unpaid, paid, ...)">
    <enums>
      <enum name="Neutral" id="0"/>
      <enum name="EntryFirst" id="1"/>
      <enum name="Paid" id="2"/>
      <enum name="Used" id="3"/>
    </enums>
  </tag>
  <tag name="EntryGraceTime" id="0x1607" comment="Complimentary time in minutes."/>
  <tag name="ExitLagTime" id="0x1608" comment="Complimentary time in minutes."/>
  <tag name="CurrentTime" id="0x6020" comment="The current time."/>
  <tag name="ArrivalTime" id="0x6607" comment="Time when the patron has entered the premises."/>
  <tag name="ExitTime" id="0x6608" comment="Time when the patron is leaving the premises."/>
  <tag name="RemoteCommand" id="0x1609" comment="Command to be executed by RemoteControl" display="3x">
    <enums>
      <enum name="EnableMachine" id="0x001" comment="Enable station."/>
      <enum name="DisableMachine" id="0x002" comment="Close down station. Display shows 'Station Closed'"/>

      <enum name="Unlock" id="0x100" comment="Unlocks open or closed state"/>
      <enum name="LockOpen" id="0x101" comment="Lock gate open"/>
      <enum name="LockClose" id="0x102" comment="Lock gate closed"/>
      <enum name="OpenGate" id="0x103" comment="Send open impulse to gate"/>
      <enum name="CloseGate" id="0x104" comment="Send close impulse to gate"/>
      <enum name="GrantAccess" id="0x105" comment="Grant access to vehicle currently in front of gate"/>

      <enum name="EnableVerifier" id="0x201" comment="Enable ticket verifier"/>
      <enum name="DisableVerifier" id="0x202" comment="Disable ticket verifier"/>
      <enum name="ResyncVerifier" id="0x203" comment="Resynchronize stored filesystem data into verifier memory."/>
      <enum name="SelectVerifier" id="0x204" comment="Chose between primary and secondary verifier."/>

      <enum name="SetOccupied" id="0x301" comment="Set the occupied bit. Overrides the hardware occupied input."/>
      <enum name="ClearOccupied" id="0x302" comment="Clear software override of occupied state."/>

      <enum name="SetDCSRelay1" id="0x401" comment="DCS Relay 1 On."/>
      <enum name="ClearDCSRelay1" id="0x402" comment="DCS Relay 1 Off."/>
      <enum name="SetDCSRelay2" id="0x403" comment="DCS Relay 2 On."/>
      <enum name="ClearDCSRelay2" id="0x404" comment="DCS Relay 2 Off."/>
      <enum name="SetDCSRelay3" id="0x405" comment="DCS Relay 3 On."/>
      <enum name="ClearDCSRelay3" id="0x406" comment="DCS Relay 3 Off."/>
      <enum name="SetDCSRelay4" id="0x407" comment="DCS Relay 4 On."/>
      <enum name="ClearDCSRelay4" id="0x408" comment="DCS Relay 4 Off."/>

      <enum name="SettleOffline" id="0x501" comment="Ask Creditcard Terminal to upload unfinished transactions"/>
      <enum name="BatchTotals" id="0x502" comment="Ask Credticard Terminal for intermediate status"/>
      <enum name="BatchClose" id="0x503" comment="Ask Credticard Terminal for intermediate status, then clear it."/>
      <enum name="DiscardOfflineData" id="0x504" comment="Discard pending offline transactions"/>
      <enum name="ForceBatchClose" id="0x505" comment="Discard pending offline transactions, then run BatchClose."/>
      <enum name="TriggerTerminalUpdate" id="0x506" comment="Trigger terminal online update"/>
      <enum name="TriggerTerminalInit" id="0x507" comment="Trigger terminal initialization"/>

      <enum name="ClearOutput" id="0x600" comment="Generic digital output control: Turn output off"/>
      <enum name="SetOutput" id="0x601" comment="Generic digital output control: Turn output on"/>
      <enum name="PulseOutput" id="0x602" comment="Generic digital output control: Briefly turn output on"/>

      <enum name="Reset" id="0xADE" comment="Full system reset"/>
      <enum name="ScheduleReset" id="0xADF" comment="Full system reset, delayed until machine is idle"/>
    </enums>
  </tag>
  <tag name="RemainingBalance" id="0x160A" comment="Remaining balance of reusable credential"/>
  <tag name="RemainingUses" id="0x160B" comment="Remaining uses of reusable credential"/>
  <tag name="PriceType" id="0x160C" comment="Reason that caused a price query">
    <enums>
      <enum name="Ticket" id="1" comment="Need price for a ticket"/>
      <enum name="Chaser" id="2" comment="Update price due to a chaser ticket"/>
      <enum name="Validation" id="3" comment="Update price due to a validation code"/>
      <enum name="PayOnEntry" id="4" comment="Need price for pay on entry"/>
      <enum name="ReplacementTicket" id="5" comment="Need price for a replacement ticket"/>
      <enum name="BarcodeBill" id="6" comment="A barcode has been read through the bill validator"/>
      <enum name="ValidationToken" id="7" comment="A token coin/bill has been inserted"/>
    </enums>
  </tag>
  <tag name="DiscountID" id="0x160D" comment="ID number for a discount"/>
  <tag name="ReceiptType" id="0x160E">
    <enums>
      <enum name="PaymentReceipt" id="1" comment="Receipt at end of payment session."/>
      <enum name="CreditReceipt" id="2" comment="Receipt giving credit to patron ('Machine owes patron money')"/>
      <enum name="ReplacementReceipt" id="3" comment="Patron bought replacement ticket on barcode APS"/>
    </enums>
  </tag>
  <tag name="ValidationData" id="0x060F" comment="Encodes discount information for use inside QR256/QR384 barcode tickets (0...24 bytes)"/>
  <tag name="TicketType" id="0x1610" comment="Parking ticket type">
    <enums>
      <enum name="Standard" id="0" comment="Standard ticket."/>
      <enum name="Replacement" id="1" comment="Replacement ticket."/>
    </enums>
  </tag>
  <tag name="TicketMedia" id="0x1611" comment="Parking ticket media type">
    <enums>
      <enum name="Unspecified" id="0" comment="No information available."/>
      <enum name="PlainPaper" id="1" comment="Printed on a plain piece of paper."/>
      <enum name="PaperTicket" id="2" comment="Credit card sized paper ticket."/>
      <enum name="DeviceScreen" id="3" comment="For use on a cellphone or other device screen."/>
    </enums>
  </tag>
  <tag name="ChargeType" id="0x1612" comment="Reason why payment is required">
    <enums>
      <enum name="Generic" id="0" comment="Generic fee payment"/>
      <enum name="Ticket" id="1" comment="Parking ticket payment"/>
      <enum name="ReplacementTicket" id="2" comment="Payment for a replacement ticket"/>
      <enum name="Recharge" id="3" comment="Recharge credit balance"/>
    </enums>
  </tag>
  <tag name="RechargeButtonConfig" id="0xC612" comment="List of values to put on buttons in Recharge payment scene"/>

  <tag name="MachineStatus" id="0x7620" comment="General machine status.">
    <bits>
      <bit name="Online" id="0"/>
      <bit name="Enabled" id="1" comment="Station is open to the public"/>
      <bit name="Occupied" id="2" comment="Lot is occupied"/>
      <bit name="LockedOpen" id="3" comment="Gate is locked open"/>
      <bit name="LockedClose" id="4" comment="Gate is locked close"/>
      <bit name="EventLogFull" id="5" comment="Out of space for transaction log"/>
      <bit name="KeyholeOpen" id="6" comment="Main keyhole access shutter has been opened with secondary key."/>
      <bit name="DoorOpen" id="7" comment="Door open sensor engaged"/>
      <bit name="Alarm" id="8" comment="Alarm input engaged"/>
      <bit name="ExactChangeWarning" id="9" comment="Exact change warning displays during payment"/>
      <bit name="MaintenanceRequired" id="10" comment="Some condition exists which requires human attention."/>
      <bit name="DCSRelay1" id="11" comment="DCS Relay 1 is closed."/>
      <bit name="DCSRelay2" id="12" comment="DCS Relay 2 is closed."/>
      <bit name="DCSRelay3" id="13" comment="DCS Relay 3 is closed."/>
      <bit name="DCSRelay4" id="14" comment="DCS Relay 4 is closed."/>
    </bits>
  </tag>
  <tag name="LaneStatus" id="0x7621" comment="Status of stations lane sensors">
    <bits>
      <bit name="LoopA" id="0" comment="Loop Detector A"/>
      <bit name="LoopB" id="1" comment="Loop Detector B"/>
      <bit name="LoopC" id="2" comment="Loop Detector C"/>
      <bit name="GateIsOpen" id="8" comment="Gate is open"/>
      <bit name="GateIsClosed" id="9" comment="Gate is closed"/>
      <bit name="GateFault" id="10" comment="Gate malfunction"/>
      <bit name="TrafficJam" id="17" comment="TrafficJam input engaged"/>
    </bits>
  </tag>
  <tag name="VerifierStatus" id="0x7622" comment="Status of ticket verfier head">
    <bits>
      <bit name="Disabled" id="0" comment="Verifier disabled"/>
      <bit name="Fault" id="1" comment="Verfier malfunction"/>
      <bit name="Jammed" id="2" comment="Ticket jammed in verfier"/>
      <bit name="TicketsLow" id="3" comment="Tickets almost empty"/>
      <bit name="TicketsEmpty" id="4" comment="Out of tickets"/>
      <bit name="BinFull" id="5" comment="Trash bin full"/>
      <bit name="TicketInMouth" id="6" comment="Set while ticket is being presented to the patron"/>
    </bits>
  </tag>
  <tag name="ReceiptStatus" id="0x7623" comment="Status of receipt printer">
    <bits>
      <bit name="Fault" id="1" comment="Printer malfunction"/>
      <bit name="PaperLow" id="3" comment="Paper almost empty"/>
      <bit name="PaperEmpty" id="4" comment="Out of paper"/>
    </bits>
  </tag>
  <tag name="OutputStatus" id="0x7624" comment="Status of digital outputs"/>

  <tag name="FreePass" id="0x2641" comment="When true, server grants ticket free pass"/>
  <tag name="ReturnTicket" id="0x2642" comment="Tells station to return ticket at end of transaction."/>
  <tag name="BackoutFlag" id="0x2643" comment="In a logged event, indicates vehicle backed out."/>
  <tag name="OfflineFlag" id="0x2644" comment="When true, the ticket processing happened offline."/>
  <tag name="LowChangeWarning" id="0x2645" comment="Tells paystation to display a low change warning (or not)"/>
  <tag name="EnableGateTrigger" id="0x2646" comment="Set to false to disable the actual gate trigger after code has decided to let patron pass."/>
  <tag name="InvalidateTicket" id="0x2647" comment="Flag asking to destroy barcode on ticket"/>
  <tag name="ReissueTicket" id="0x2648" comment="Flag asking to reprint something"/>
  <tag name="EnableOnScreenKeypad" id="0x2649" comment="Enable 'Keypad' button on touch-screen displays."/>

  <tag name="PAN" id="0x3660" comment="Primary Account Number, e.g. Credit card number." secure="true"/>
  <tag name="IBAN" id="0x3661" comment="International Bank Account Number" secure="true"/>
  <tag name="EffectiveDate" id="0x4660" comment="Effective date as read from card. (Card is not valid before that date)"/>
  <tag name="ExpiryDate" id="0x4661" comment="Expiry date as read from card."/>
  <tag name="TransactionTime" id="0x6661" comment="Timestamp of transaction"/>
  <tag name="AuthCode" id="0x3662" comment="Authorization code for CC transaction."/>
  <tag name="PortNumber" id="0x1663" comment="E.g. a serial port number. Used by keycard readers."/>
  <tag name="AccountNumber" id="0x3663" comment="Institute Specific Account Number, e.g. a German Kontonummer." secure="true"/>
  <tag name="BankNumber" id="0x3664" comment="Country Specific Bank Number, e.g. a German Bankleitzahl." secure="true"/>
  <tag name="ShortBankNumber" id="0x3665" comment="Country Specific Short Bank Number, e.g. a German 5-digit Bankleitzahl."/>
  <tag name="Acquirer" id="0x3666" comment="Name of the card processing entity"/>
  <tag name="CardType" id="0x3667" comment="VISA, MASTERCARD, MAESTRO, etc..."/>
  <tag name="BankName" id="0x3668" comment="Name of a bank"/>
  <tag name="RawTransactionResult" id="0xC669" comment="Raw transaction result data from payment terminal"/>
  <tag name="ReceiptData" id="0xF66A" comment="Contains transaction receipt data"/>
  <tag name="KeySerialNumber" id="0x066B" comment="Serial number of encryption key"/>
  <tag name="Confidence" id="0x166C" comment="A percentage that indicates the probability if certain data is correct."/>
  <tag name="ConfidenceList" id="0xC66C" comment="A list of Confidence percentage values"/>
  <tag name="PlateStatus" id="0x166D" comment="Database state of a license plate">
    <enums>
      <enum name="Normal" id="0"/>
      <enum name="Blacklisted" id="1"/>
      <enum name="Whitelisted" id="2"/>
    </enums>
  </tag>
  <tag name="ImageID" id="0x366E" comment="UUID (or similar) of an image"/>
  <tag name="LicensePlate" id="0x366F" comment="License Plate Number"/>
  <tag name="Jurisdiction" id="0x3670" comment="License Plate Jurisdiction"/>

  <tag name="CCState" id="0x1800" comment="State of payment device">
    <enums>
      <enum name="None" id="0" comment="No payment terminal installed"/>
      <enum name="Offline" id="1" comment="Payment terminal is not in a working condition"/>
      <enum name="Busy" id="2" comment="Payment terminal is functional, but currently not available for transactions."/>
      <enum name="Disabled" id="3" comment="Payment terminal is available for transactions, but currently disabled."/>
      <enum name="Enabled" id="4" comment="Payment terminal is waiting for a card."/>
      <enum name="Ready" id="5" comment="Payment terminal is ready for a transaction."/>
      <enum name="Cancelable" id="8" comment="Transaction is being processed, but can still be canceled."/>
      <enum name="Processing" id="6" comment="Transaction is being processed."/>
      <enum name="Completed" id="7" comment="Transaction has finished (either successful or not), result is available"/>
    </enums>
  </tag>
  <tag name="CCType" id="0x1801" comment="Type of payment device">
    <enums>
      <enum name="ClosedLoop" id="0"/>
      <enum name="OpenLoop" id="1"/>
    </enums>
  </tag>
  <tag name="CCTransactionType" id="0x1802" comment="Type of payment transaction">
    <enums>
      <enum name="Payment" id="0"/>
    </enums>
  </tag>

  <!-- Nested messages -->
  <tag name="ParkingTicket" id="0xF6C0" comment="Nested message with parking ticket data."/>
  <tag name="Validation" id="0xF6C1" comment="Nested message with any validation data (Chaser Ticket, External Reader, Token, Barcode Bill)"/>
  <tag name="ValidationList" id="0xC6C1" comment="List of Validation message structures"/>
  <tag name="EventTicket" id="0xF6C2" comment="Ditto, but for event tickets."/>
  <tag name="Keycard" id="0xF6C3" comment="Nested message with keycard data. Usually contains a nested barcode field."/>
  <tag name="VersionInfo" id="0xF6C4" comment="Detailed versioning information"/>
  <tag name="UserMessage" id="0xF6C5" comment="Custom user message to go on station display"/>
  <tag name="CashboxData" id="0xCF94" comment="Nested message with information about cashbox. Contains multiple CoinData and/or BillData items, one for each coin/bill."/>
  <tag name="CoinData" id="0xFF95" comment="Nested message with information about one coin. e.g a coin type, count and currency."/>
  <tag name="BillData" id="0xFF96" comment="Ditto, for bills."/>
  <tag name="CashDevice" id="0xFF97" comment="Container for information about one cash device"/>
  <tag name="CashDeviceList" id="0xCF97" comment="Container for a list of cash devices"/>
  <tag name="ContentFlags" id="0x7F97" comment="Flags for a money container">
    <bits>
      <bit name="Present" id="0" comment="Container is present in the machine"/>
      <bit name="Full" id="1" comment="Container can store no more money"/>
      <bit name="Busy" id="2" comment="Container is being reconfigured. It's configuration will change soon."/>
      <bit name="Escrow" id="3" comment="Contents are of different types and values."/>
    </bits>
  </tag>
  <tag name="ChangeData" id="0xCF98" comment="Nested message with information about change. Change is money stored in tubes, hoppers or bill cassettes. Same structure as CashboxData."/>
  <tag name="DispenseData" id="0xFF99" comment="Setting up cash dispensing limits"/>
  <tag name="DiscountList" id="0xCF9A" comment="List of discounts granted to ticket price."/>
  <tag name="SurchargeList" id="0xCF9B" comment="List of surcharges added to ticket price."/>
  <tag name="TaxList" id="0xCF9C" comment="List of taxes added to ticket price."/>
  <tag name="Creditcard" id="0xFF9D" comment="Credit card information"/>
  <tag name="CreditcardTicket" id="0xFF9E" comment="Credit card used as parking ticket"/>
  <tag name="Contents" id="0xCF9E" comment="Information about money stored"/>
  <tag name="CashDelta" id="0xCF9F" comment="Lists money that has entered/left the machine during a session."/>
  <tag name="Refundable" id="0xF348" comment="Contains monetary values like ValuePaid, etc.., but not including value tokens."/>
  <tag name="NonRefundable" id="0xF349" comment="Contains monetary values like ValuePaid, etc.., but ONLY including value tokens."/>
  <tag name="PlateData" id="0xF34A" comment="Data structure for passing license plate recognition data"/>

  <!-- Settings Tags -->
  <tag name="Setup" id="0xF000" comment="Machine settings container"/>
  <tag name="CashSetup" id="0xF001" comment="Cash settings container"/>
  <tag name="StationType" id="0x1700" comment="Basic type of station" display="3x">
    <enums>
      <enum name="TICO" id="0x000" comment="Ticket in, Creditcard out"/>
      <enum name="CPOE" id="0x001" comment="Creditcard Pay on Entry"/>
      <enum name="ETV" id="0x002" comment="Exit Ticket Validator"/>
      <enum name="TIM" id="0x003" comment="Ticket Issuing Machine"/>

      <enum name="APS" id="0x100" comment="Automated Paystation"/>
      <enum name="PIL" id="0x101" comment="Pay in Lane"/>

      <enum name="AlcETV" id="0x202" comment="Access Lane Control: ExitExit Ticket Validator"/>
      <enum name="AlcTIM" id="0x203" comment="Access Lane Control: Ticket issuing machine"/>
      <enum name="AlcExit" id="0x204" comment="Access Lane Control: Exit"/>
      <enum name="AlcEntry" id="0x205" comment="Access Lane Control: Entry"/>
    </enums>
  </tag>
  <tag name="StationVariant" id="0x3700" comment="Model variant of station, e.g. minor differences in hardware."/>
  <tag name="ServerAddress" id="0x9701" comment="IP address of server"/>
  <tag name="ServerPort" id="0x1702" comment="Port number at server"/>
  <tag name="NetworkMode" id="0x1701" comment="Network mode">
    <enums>
      <enum name="Disabled" id="0"/>
      <enum name="DHCP" id="1"/>
      <enum name="Static" id="2"/>
    </enums>
  </tag>
  <tag name="NetworkAddress" id="0x9702" comment="Station's own IPv4 address"/>
  <tag name="NetworkNetmask" id="0x9703" comment="Station's own IPv4 netmask"/>
  <tag name="NetworkGateway" id="0x9704" comment="Station's own IPv4 gateway"/>
  <tag name="LogOverwriteOldest" id="0x2702" comment="When set: If log is full, overwrites oldest entries instead of stopping machine until server comes around."/>
  <tag name="LoopOptions" id="0x1703" comment="Type of detection loops installed. (TODO: Def)">
    <enums>
      <enum name="None" id="0"/>
      <enum name="One" id="1"/>
      <enum name="TwoFar" id="2"/>
      <enum name="TwoNear" id="3"/>
      <enum name="Three" id="4"/>
    </enums>
  </tag>
  <tag name="Language" id="0x3705" comment="Language used for user interface."/>
  <tag name="LanguageSequence" id="0xC705" comment="Sequence of languages selectable by patron"/>
  <tag name="BackoutTime" id="0x1706" comment="Acceptable dead time for two-loops-far mode"/>
  <tag name="StationNumber" id="0x1708" comment="Number of the station handling the message"/>
  <tag name="PulseTime" id="0x170A" comment="Length of output pulse"/>
  <tag name="RateList" id="0xC70B" comment="List of rates. First is default, further are selected by AlternateRate inputs."/>
  <tag name="RateNumber" id="0x170B" comment="Number of tarriff the patron is billed"/>
  <tag name="FreePassMode" id="0x270B" comment="Entry/Exit stations just open up on gate trigger when set."/>
  <tag name="FreeOutMap" id="0x770B" comment="Rates that have their RateNumber bit set are free to exit"/>
  <tag name="ActiveTime" id="0x570C" comment="Time when station opens automatically"/>
  <tag name="InactiveTime" id="0x570D" comment="Time when station closes automatically"/>
  <tag name="EnableCreditAccess" id="0x270E" comment="Accept credit cards as access tokens (Credit in/Credit out)"/>
  <tag name="EnableEventTickets" id="0x270F" comment="Acceptance of event tickets"/>
  <tag name="RealTimeStatus" id="0x2710" comment="Station sends live update of state when set."/>
  <tag name="DateFormat" id="0x1711" comment="Selects date format">
    <enums>
      <enum name="MMDDYY" id="0"/>
      <enum name="DDMMYY" id="1"/>
      <enum name="YYMMDD" id="2"/>
    </enums>
  </tag>
  <tag name="DateSeparator" id="0x1712" comment="Selects date separator">
    <enums>
      <enum name="Slash" id="0"/>
      <enum name="Dash" id="1"/>
      <enum name="Dot" id="2"/>
    </enums>
  </tag>
  <tag name="TimeFormat" id="0x1713" comment="Selects 12h/24h time format">
    <enums>
      <enum name="H12" id="0"/>
      <enum name="H24" id="1"/>
    </enums>
  </tag>
  <tag name="DecimalSeparator" id="0x1714" comment="Typically a dot or a comma">
    <enums>
      <enum name="Dot" id="0"/>
      <enum name="Comma" id="1"/>
    </enums>
  </tag>
  <tag name="EnableCicoWhenFull" id="0x2712" comment="Enable access via credit card even when lot is full"/>
  <tag name="IssueTicketWhenFull" id="0x2713" comment="Enable ticket printing even when lot is full"/>
  <tag name="VerifyTicket" id="0x2714" comment="Verify ticket after write"/>
  <tag name="WithoutVerifier" id="0x2715" comment="Disable support for ticket verifier (Access only)"/>
  <tag name="NoReversalOnVerifierError" id="0x2716" comment="Verifier failure after successful payment does not fail the session."/>
  <tag name="KeycardMapSession" id="0x7716" comment="Enables serial ports for use as external readers (valid while running a customer session)"/>
  <tag name="KeycardMapDefault" id="0x7717" comment="Enables serial ports for use as external readers (valid when not in a customer session)"/>
  <tag name="KeycardMapIgnoreDup" id="0x7718" comment="Serial ports listed here will report each keycard scan once per vehicle only."/>
  <tag name="KeycardConfig" id="0xF717" comment="Nested message with keycard setup"/>
  <tag name="EnableAntipassback" id="0x2718" comment="Antipassback mode"/>
  <tag name="OfflineMode" id="0x1719" comment="What to do in case of server loss">
    <enums>
      <enum name="AlwaysAccept" id="0" comment="Always accept keycards while offline"/>
      <enum name="AlwaysDeny" id="1" comment="Always deny keycards while offline"/>
      <enum name="CheckLocally" id="2" comment="Check keycard against local facility code"/>
    </enums>
  </tag>
  <tag name="CodeStart" id="0x171A" comment="Start of code on keycard"/>
  <tag name="CodeLength" id="0x171B" comment="Length of code on keycard"/>
  <tag name="ServerTimeout" id="0x171C" comment="Timeout station waits for messages from server"/>
  <tag name="UpdateInterval" id="0x171D" comment="Time between periodic status updates"/>
  <tag name="PaymentMode" id="0x771E" comment="Enables/Disables payment methods">
    <bits>
      <bit name="DisableCreditcard" id="0"/>
      <bit name="DisableCash" id="1"/>
    </bits>
  </tag>

  <tag name="DigitalOutputList" id="0xC71F" comment="Nested container for output assignments"/>
  <tag name="OutputIdentifier" id="0x171F" comment="Identifies an output, e.g. GateOpen or LotFull">
    <enums>
      <enum name="Undefined" id="0"/>
      <enum name="GateOpen" id="1" comment="Open gate pulse"/>
      <enum name="GateClose" id="2" comment="Close gate pulse"/>
      <enum name="LockOpen" id="3" comment="Gate permanently open."/>
      <enum name="LockClose" id="4" comment="Gate permanently closed."/>
      <enum name="StationClosed" id="5" comment="Station/lane is closed"/>
      <enum name="BinFull" id="6" comment="Used tickets garbage bin is full (not on TIM units)"/>
      <enum name="Error" id="7" comment="Maintenance error"/>
      <enum name="ExternalPulse" id="8" comment="Machine is ready for next transaction"/>
      <enum name="LotFull" id="9" comment="Parking lot is full"/>
      <enum name="PrinterError" id="10" comment="Printer needs attention (out of paper or malfunction)"/>
      <enum name="TicketPresenting" id="11" comment="Set while ticket is being presented to the patron"/>
      <enum name="TicketLow" id="12" comment="Machine is almost out of tickets (Only TIM units)"/>
      <enum name="VideoTrigger" id="13" comment="Optional camera should make a picture"/>
      <enum name="TicketButton" id="14" comment="Ticket button lamp for ALC-TIM"/>
      <enum name="TurnTicket" id="15" comment="Pulses when ticket was inserted wrong way up"/>
      <enum name="StationOnline" id="16" comment="Connected to Server"/>
      <enum name="EventLogFull" id="17" comment="No more room for event log"/>
      <enum name="Alarm" id="18" comment="Software controlled alarm signal"/>
      <enum name="LowChange" id="19" comment="Low change warning signal"/>
      <enum name="ResetVerifier" id="20" comment="Trigger signal to reset verifier"/>
      <enum name="DCSRelayOut1" id="21" comment="DCS Relay 1"/>
      <enum name="DCSRelayOut2" id="22" comment="DCS Relay 2"/>
      <enum name="DCSRelayOut3" id="23" comment="DCS Relay 3"/>
      <enum name="DCSRelayOut4" id="24" comment="DCS Relay 4"/>

      <enum name="ArmedState" id="32" comment="Machine is ready for a session"/>
      <enum name="DisableAlarm" id="33" comment="Disable hardware alarm device"/>
      <enum name="ForceAlarm" id="34" comment="Force sounding of hardware alarm device"/>
      <enum name="CoinEscrowMotor" id="35" comment="Run an escrow cycle on a coin acceptance device"/>
      <enum name="CoinShutter" id="36" comment="Open shutter of a coin acceptance device"/>
      <enum name="PaperLow" id="38" comment="Printer almost out of paper"/>
      <enum name="PaperEmpty" id="39" comment="Printer out of paper"/>
      <enum name="VerifierError" id="40" comment="Verifier needs attention (out of paper or malfunction)"/>
      <enum name="TicketEmpty" id="41" comment="Ticket supply is empty"/>

      <enum name="StaticOff" id="100" comment="This output is always turned off"/>
      <enum name="StaticOn" id="101" comment="This output is always turned on"/>

      <enum name="Button1" id="201" comment="Button #1 (APS:Language)"/>
      <enum name="Button2" id="202" comment="Button #2 (APS:Cancel)"/>
      <enum name="Button3" id="203" comment="Button #3 (APS:Receipt)"/>
      <enum name="Button4" id="204" comment="Button #4 (APS:Ticket)"/>
      <enum name="Button5" id="205" comment="Button #5 (APS:Pay)"/>
      <enum name="Button6" id="206" comment="Button #6"/>
      <enum name="Button7" id="207" comment="Button #7"/>
      <enum name="Button8" id="208" comment="Button #8"/>

      <enum name="BezelVerifier" id="300" comment="Illumination indicating main verifier is ready for use"/>
      <enum name="BezelReceiptPrinter" id="301" comment="Illumination indicating a receipt is ready for taking"/>
      <enum name="BezelCardReader" id="302" comment="Illumination indicating (credit) card reader is ready for a card"/>
      <enum name="BezelCardPinpad" id="303" comment="Illumination indicating the pinpad of a credit card reader is ready for input"/>
      <enum name="BezelKeypad" id="304" comment="Illumination indicating a generic keypad is enabled for input (Access control, coupon, voucher...)"/>
      <enum name="BezelCoinAccept" id="305" comment="Illumination indicating machine will accept coins"/>
      <enum name="BezelBillAccept" id="306" comment="Illumination indicating machine will accept bills"/>
      <enum name="BezelCoinReturn" id="307" comment="Illumination indicating coins are being returned"/>
      <enum name="BezelBillReturn" id="308" comment="Illumination indicating bills are being returned"/>
      <enum name="BezelSecondaryVerifier" id="309" comment="Illumination indicating secondary verifier is ready for use"/>
      <enum name="BezelSecondaryCardReader" id="310" comment="Illumination indicating secondary card reader is ready for a card"/>
      <enum name="BezelArmedState" id="311" comment="Machine is ready for a session. Same as ArmedState, but included in lamp test."/>

      <enum name="Guide1" id="400" comment="Animated 'Insert Here' guiding light"/>
      <enum name="Guide2" id="401" comment="Animated 'Insert Here' guiding light"/>
      <enum name="Guide3" id="402" comment="Animated 'Insert Here' guiding light"/>
      <enum name="Guide4" id="403" comment="Animated 'Insert Here' guiding light"/>
      <enum name="Guide5" id="404" comment="Animated 'Insert Here' guiding light"/>
      <enum name="Guide6" id="405" comment="Animated 'Insert Here' guiding light"/>
      <enum name="Guide7" id="406" comment="Animated 'Insert Here' guiding light"/>
      <enum name="Guide8" id="407" comment="Animated 'Insert Here' guiding light"/>

      <enum name="Verifier1" id="500" comment="Animated verifier bezel illumination"/>
      <enum name="Verifier2" id="501" comment="Animated verifier bezel illumination"/>
      <enum name="Verifier3" id="502" comment="Animated verifier bezel illumination"/>
      <enum name="Verifier4" id="503" comment="Animated verifier bezel illumination"/>
      <enum name="Verifier5" id="504" comment="Animated verifier bezel illumination"/>
      <enum name="Verifier6" id="505" comment="Animated verifier bezel illumination"/>
      <enum name="Verifier7" id="506" comment="Animated verifier bezel illumination"/>
      <enum name="Verifier8" id="507" comment="Animated verifier bezel illumination"/>
    </enums>
  </tag>
  <tag name="DigitalInputList" id="0xC720" comment="Nested container for input assignments"/>
  <tag name="InputIdentifier" id="0x1720" comment="Identifies an input, e.g. LoopA or AccessPulse">
    <enums>
      <enum name="Undefined" id="0"/>
      <enum name="LoopA" id="1"/>
      <enum name="LoopB" id="2"/>
      <enum name="LoopC" id="3"/>
      <enum name="GateIsOpen" id="4"/>
      <enum name="GateIsClosed" id="5"/>
      <enum name="AccessPulse" id="6"/>
      <enum name="DisableVerifier" id="7"/>
      <enum name="DisableStation" id="8"/>
      <enum name="GateFault" id="9"/>
      <enum name="BinFull" id="10"/>
      <enum name="TicketLow" id="11"/>
      <enum name="TicketButton" id="12"/>
      <enum name="AlternateTicketButton1" id="13"/>
      <enum name="AlternateTicketButton2" id="14"/>
      <enum name="LotFull" id="15"/>
      <enum name="Alarm" id="16"/>
      <enum name="AlternateRate1" id="17"/>
      <enum name="AlternateRate2" id="18"/>
      <enum name="TrafficJam" id="19"/>
      <enum name="PresenceDetect" id="20"/>
      <enum name="ServiceSwitch" id="21"/>
      <enum name="CoinEscrowMotor" id="22"/>
      <enum name="PaperLow" id="23"/>
      <enum name="PaperEmpty" id="24"/>
      <enum name="TicketEmpty" id="25"/>
      <enum name="PaperPresenting" id="26"/>
      <enum name="TicketPresenting" id="27"/>
      <enum name="Button1" id="201" comment="Button #1 (APS:Language)"/>
      <enum name="Button2" id="202" comment="Button #2 (APS:Cancel)"/>
      <enum name="Button3" id="203" comment="Button #3 (APS:Receipt)"/>
      <enum name="Button4" id="204" comment="Button #4 (APS:Ticket)"/>
      <enum name="Button5" id="205" comment="Button #5 (APS:Pay)"/>
      <enum name="Button6" id="206" comment="Push button #6 input"/>
      <enum name="Button7" id="207" comment="Push button #7 input"/>
      <enum name="Button8" id="208" comment="Push button #8 input"/>
    </enums>
  </tag>

  <tag name="ReceiptFlags" id="0x7721" comment="Receipt printer configuration">
    <bits>
      <bit name="AutomaticCash" id="0" comment="Automatically print receipt for cash payments"/>
      <bit name="AutomaticCreditcard" id="1" comment="Automatically print receipt for creditcard payments"/>
      <bit name="EnableZeroReceipt" id="2" comment="Enable printing of zero value receipts"/>
      <bit name="GenerateLocally" id="3" comment="Generate receipt locally at station"/>
      <bit name="AskPatron" id="4" comment="At end of payment, ask patron for receipt request."/>
      <bit name="QualifiedReceipt" id="5" comment="Run country specific qualified receipt procedure (Depending on main currency)"/>
    </bits>
  </tag>
  <tag name="SerialTerminationCharacter" id="0x1722" comment="Termination character for serial port"/>
  <tag name="SerialReceiveTimeout" id="0x1723" comment="Receive timeout for serial port"/>
  <tag name="SyslogServerAddress" id="0x9724" comment="IP Address of Syslog Server (0 to disable)"/>
  <tag name="ExternalPulseCount" id="0x1725" comment="Number of external pulses to give when armed (0 = as long as station is armed)"/>
  <tag name="ExternalPulseInterval" id="0x1726" comment="Interval between external pulses in ms (0 = static signal)"/>
  <tag name="ReceiptButtonTime" id="0x1727" comment="APS: Time the receipt button stays lit after payment (ms)"/>
  <tag name="ReceiptInfoTime" id="0x1728" comment="APS: Time the message &quot;please take your receipt&quot; stays on display."/>
  <tag name="CreditcardDisplayList" id="0xC729" comment="List of creditcard names. Only used to chose what is displayed on payment screen."/>
  <tag name="AcceptedCashList" id="0xC72A" comment="Contains a list of enabled coins and bills. Used in QueryPriceResponse."/>
  <tag name="ReceiptPrintDarkness" id="0x172B" comment="Control darkness of printing on a receipt printer."/>
  <tag name="ReceiptPrinterType" id="0x172C" comment="Type of attached receipt printer" display="4x">
    <enums>
      <enum name="None" id="0x0000"/>
      <enum name="Pixi" id="0x0001" comment="Hengstler Pixi"/>
      <enum name="C56" id="0x0002" comment="Hengstler C56"/>
      <enum name="X56" id="0x0003" comment="Hengstler X56"/>
      <enum name="GKP92" id="0x0004" comment="Glyn GKP92"/>
      <enum name="Custom" id="0x0005" comment="Auto-detection for devices made by Custom S.p.A."/>
      <enum name="Zebra" id="0x0006" comment="Auto-detection for devices made by Zebra"/>
      <enum name="CustomPP54" id="0x0301" comment="Custom PP54"/>
      <enum name="CustomKPM180" id="0x0302" comment="Custom KPM180"/>
      <enum name="CustomVKP80II" id="0x0303" comment="Custom VKP80II"/>
      <enum name="CustomVKP80III" id="0x0304" comment="Custom VKP80III"/>
      <enum name="CustomTL60" id="0x0305" comment="Custom TL60"/>
      <enum name="CustomTL60EJ" id="0x0306" comment="Custom TL60-EJ"/>
      <enum name="CustomTG2460" id="0x0307" comment="Custom TG2460"/>
      <enum name="ZebraKR403" id="0x0400" comment="Zebra KR403"/>
      <enum name="USB" id="0xFFFF" comment="USB (Autodetect)"/>
    </enums>
  </tag>
  <tag name="PaymentConfig" id="0x772D" comment="Misc payment configuration bits">
    <bits>
      <bit name="DisableCreditcardPreCheck" id="0" comment="Enables/Disables creditcard magstripe plausibility checks"/>
      <bit name="EnableManualDispense" id="1" comment="Enables local control buttons on cash devices"/>
      <bit name="EnableReplacementTicketButton" id="2" comment="Show/enable &quot;Lost Ticket&quot; button on APS/PIL main screen."/>
      <bit name="AbortWhenOutOfChange" id="3" comment="Abort session when there is not enough change, to avoid a credit receipt."/>
    </bits>
  </tag>
  <tag name="ReceiptLanguage" id="0x372E" comment="Language for printing receipts."/>
  <tag name="VerifierType" id="0x172F" comment="Type of ticket verifier head" display="3x">
    <enums>
      <enum name="NoVerifier" id="0x000" comment="No Verifier attached"/>
      <enum name="THSP" id="0x001" comment="Teratronik Highspeed Printer (Barcode)"/>
      <enum name="TML" id="0x002" comment="Teratronik Motor Reader (Barcode)"/>
      <enum name="Scanner" id="0x003" comment="Plain vanilla barcode scanner"/>
      <enum name="Eltra" id="0x101" comment="Eltra Magstripe Head"/>
      <enum name="EltraBarcode" id="0x102" comment="Eltra Barcode Head"/>
      <enum name="MLTim" id="0x201" comment="ML Electronique Head"/>
      <enum name="CustomAuto" id="0x300" comment="Auto-detection for devices made by Custom S.p.A."/>
      <enum name="CustomPP54" id="0x301" comment="Custom PP54"/>
      <enum name="CustomKPM180" id="0x302" comment="Custom KPM180"/>
      <enum name="CustomVKP80II" id="0x303" comment="Custom VKP80II"/>
      <enum name="CustomVKP80III" id="0x304" comment="Custom VKP80III"/>
      <enum name="CustomTL60" id="0x305" comment="Custom TL60"/>
      <enum name="CustomTL60EJ" id="0x306" comment="Custom TL60-EJ"/>
      <enum name="CustomTG2460" id="0x307" comment="Custom TG2460"/>
      <enum name="ZebraAuto" id="0x400" comment="Auto-detection for devices made by Zebra"/>
      <enum name="ZebraKR403" id="0x403" comment="Zebra KR403"/>
    </enums>
  </tag>
  <tag name="VerifierType2" id="0x172E" comment="Type of secondary ticket verifier head" display="3x">
    <enums>
      <enum name="NoVerifier" id="0x000" comment="No Verifier attached"/>
      <enum name="THSP" id="0x001" comment="Teratronik Highspeed Printer (Barcode)"/>
      <enum name="TML" id="0x002" comment="Teratronik Motor Reader (Barcode)"/>
      <enum name="Scanner" id="0x003" comment="Plain vanilla barcode scanner"/>
      <enum name="Eltra" id="0x101" comment="Eltra Magstripe Head"/>
      <enum name="EltraBarcode" id="0x102" comment="Eltra Barcode Head"/>
      <enum name="MLTim" id="0x201" comment="ML Electronique Head"/>
      <enum name="CustomAuto" id="0x300" comment="Auto-detection for devices made by Custom S.p.A."/>
      <enum name="CustomPP54" id="0x301" comment="Custom PP54"/>
      <enum name="CustomKPM180" id="0x302" comment="Custom KPM180"/>
      <enum name="CustomVKP80II" id="0x303" comment="Custom VKP80II"/>
      <enum name="CustomVKP80III" id="0x304" comment="Custom VKP80III"/>
      <enum name="CustomTL60" id="0x305" comment="Custom TL60"/>
      <enum name="CustomTL60EJ" id="0x306" comment="Custom TL60-EJ"/>
      <enum name="CustomTG2460" id="0x307" comment="Custom TG2460"/>
    </enums>
  </tag>
  <tag name="VerifierPrintCode" id="0x1730" comment="Print code to send to verifier (Selects text size and position, depends on verifier type used.)"/>
  <tag name="TicketPrintDarkness" id="0x1731" comment="Control darkness of printing on a THSP ticket printer."/>
  <tag name="PaymentReceiptConfig" id="0xF730" comment="Contains customizations (e.g. Head, Tail text) for receipts"/>
  <tag name="CreditReceiptConfig" id="0xF731" comment="Contains customizations (e.g. Head, Tail text) for credit slips"/>
  <tag name="ReportConfig" id="0xF732" comment="Contains customizations (e.g. Head, Tail text) for reports"/>
  <tag name="SupportedCashList" id="0xC733" comment="Contains a list of supported coins and bills. Used in QueryCashInfo."/>
  <tag name="TokenType" id="0x1734" comment="Type of a coin/bill token">
    <enums>
      <enum name="MoneyToken" id="0" comment="Processed like real, legal money."/>
      <enum name="ValueToken" id="1" comment="Has a monetary amount assigned like real money. On cancel, they're not returned as cash, but cause a credit receipt. Avoids money laundering."/>
      <enum name="ValidationToken" id="2" comment="Validation tokens are processed similar to a validation barcode."/>
    </enums>
  </tag>
  <tag name="TokenNumber" id="0x1735" comment="Token identifier number"/>
  <tag name="CashDeviceType" id="0x1736" display="2x">
    <enums>
      <enum name="MdbCoinChanger" id="0x11"/>
      <enum name="MdbBillValidator" id="0x12"/>
      <enum name="MdbCoinSorter" id="0x13"/>
      <enum name="CcnetCoinChanger" id="0x18"/>
      <enum name="CcnetBillChanger" id="0x19"/>
      <enum name="CcnetBillValidator" id="0x1A"/>
      <enum name="FpmioHopperBank" id="0x1B"/>
    </enums>
  </tag>
  <tag name="TicketLayout" id="0x1737" comment="Defines the &quot;design&quot; that is printed on the ticket.">
    <enums>
      <enum name="Plain" id="0" comment="No Barcode"/>
      <enum name="LandscapeBarcode" id="1" comment="Barcode across the long edge"/>
      <enum name="PortraitBarcode" id="2" comment="Barcode across the short edge. Suitable for reading with rear-scanning TML."/>
      <enum name="PortraitBarcodeNarrow" id="3" comment="Narrow Barcode across the short edge. Suitable for reading with rear- and middle-scanning TML."/>
      <enum name="ValetParking" id="4" comment="Defines a set of ticket designs for Valet Parking. Specific design selected via LayoutIndex at printing time."/>
      <enum name="LinePrinter" id="5" comment="Ticket format suitable for a line printer"/>
    </enums>
  </tag>
  <tag name="BarcodeType" id="0x1738" comment="Selects one of the supported barcode encoding formats">
    <enums>
      <enum name="Plain" id="0" comment="No barcode"/>
      <enum name="BarcodeNGT" id="1" comment="Teratronik NGT Parking System Format"/>
      <enum name="BarcodeUS24" id="2" comment="Common USA 24 digit format"/>
      <enum name="BarcodeUS16" id="3" comment="Legacy USA 16 digit format"/>
      <enum name="BarcodeQR128" id="4" comment="128 bit QR code format"/>
      <enum name="BarcodeQR256" id="5" comment="256 bit QR code format"/>
      <enum name="BarcodeQR384" id="6" comment="384 bit QR code format"/>
      <enum name="BarcodePE24" id="7" comment="Peru 24 digit format"/>
    </enums>
  </tag>
  <tag name="BarcodePrefix" id="0x3738" comment="Prefix to put before QR code barcode data, e.g. a URL."/>
  <tag name="LayoutIndex" id="0x1739" comment="For given design as selected by TicketLayout, selects &quot;sub&quot; design"/>
  <tag name="ServerEncodedTickets" id="0x2739" comment="When true, TIM asks server for ticket encoding before issuing a new ticket."/>
  <tag name="IssueTicketCount" id="0x173A" comment="Number of tickets to issue to patron."/>
  <tag name="VoiceVolume" id="0x173B" comment="Speaker output volume for voice announcements in percent (0...100)"/>
  <tag name="VoiceArmDelay" id="0x173C" comment="Delay between vehicle detected on loop and start of voice announcements. (Milliseconds)"/>
  <tag name="VoicePause" id="0x1745" comment="Minimum interval between identical voice announcements. (Milliseconds)"/>
  <tag name="CashUnloadDelay" id="0x173D" comment="Time machine must be idle before it tries to unload bill cassettes to cashbox. (Milliseconds)"/>
  <tag name="RemoveTimeout" id="0x173E" comment="Time to wait for patron to remove ticket (Milliseconds)"/>
  <tag name="SessionTimeout" id="0x173F" comment="Time when session times out at a paystation."/>
  <tag name="CashlessReaderType" id="0x1740" comment="Creditcard reader type">
    <enums>
      <enum name="Leadus" id="0" comment="Leadus Reader via VKmod"/>
      <enum name="Sankyo" id="1" comment="Sankyo Reader via VKmod"/>
      <enum name="BV1000" id="2" comment="Globalcom BV1000"/>
      <enum name="TTL" id="3" comment="Generic TTL type reader"/>
      <enum name="UX300" id="4" comment="Verifone UX300"/>
      <enum name="IDTech" id="5" comment="ID-Tech Magstripe Reader"/>
      <enum name="ServerBased" id="6" comment="Reader controlled by server"/>
      <enum name="TransactionServices" id="7" comment="Transaction Services"/>
      <enum name="UPT1000" id="8" comment="UPT1000 running VisaNet for Peru"/>
      <enum name="None" id="255" comment="No reader installed"/>
    </enums>
  </tag>
  <tag name="CashlessOfflineMode" id="0x1741" comment="Online/Offline mode configuration for cashless payments">
    <enums>
      <enum name="Online" id="0" comment="Transaction must complete online"/>
      <enum name="Offline" id="1" comment="Always perform offline transactions"/>
      <enum name="OnlineThenOffline" id="2" comment="Try online first, do offline on failure"/>
    </enums>
  </tag>
  <tag name="BillValidatorType" id="0x1742" comment="Selects which kind of Bill Validator is used" display="4x">
    <enums>
      <enum name="None" id="0x0000" comment="No coin validator"/>
      <enum name="MDB" id="0x1212" comment="Generic MDB protocol bill validator"/>
      <enum name="B2B" id="0x1219" comment="Bill-To-Bill"/>
      <enum name="CCBV" id="0x121A" comment="CCNET protocol simple bill validator"/>
    </enums>
  </tag>
  <tag name="CoinValidatorType" id="0x1743" comment="Selects which kind of Coin Validator is used" display="4x">
    <enums>
      <enum name="None" id="0x0000" comment="No coin validator"/>
      <enum name="MDB" id="0x1111" comment="Generic MDB protocol coin validator"/>
      <enum name="NEMP" id="0x1113" comment="NRI G40 Coin Router"/>
      <enum name="CCM" id="0x1118" comment="Teratronik ccManager subsystem"/>
    </enums>
  </tag>
  <tag name="CoinPayoutType" id="0x1744" comment="Selects which kind of coin payout hopper system is used" display="4x">
    <enums>
      <enum name="None" id="0x0000" comment="No separate hopper bank"/>
      <enum name="FPMIO" id="0x131B" comment="Digital Hopper control with Teratronik fpMIO"/>
    </enums>
  </tag>
  <tag name="FillSpec" id="0xF745" comment="Manual fill card configuration"/>
  <tag name="FillTable" id="0xC745" comment="List of manual fill card configurations"/>
  <tag name="WelcomeScene" id="0x1746" comment="Scene shown to patron when ready for use. Empty for default.">
    <enums>
      <enum name="Default" id="0" comment="Let machine decide"/>
      <enum name="PushButton" id="1" comment="Show the &quot;Please push button&quot; scene"/>
      <enum name="PushButtonOrCard" id="2" comment="Show the &quot;Please push button or use card&quot; scene"/>
      <enum name="Greeter" id="3" comment="APS shows a 'Push here to start' greeter first"/>
    </enums>
  </tag>
  <tag name="BatchCloseTime" id="0x5746" comment="Time when station runs an automatic batch close"/>
  <tag name="BatchCloseEnabled" id="0x2746" comment="Enable automatic batch close"/>
  <tag name="TerminalAutoUpdateEnabled" id="0x2747" comment="Enable automatic terminal online update"/>
  <tag name="TerminalAutoUpdateDays" id="0x1747" comment="Weekdays when station runs an automatic terminal online update (bitmap, bit 1 = Monday, bit 2 = Tuesday, ..., bit 7 = Sunday)"/>
  <tag name="TerminalAutoUpdateTime" id="0x5747" comment="Time when station runs an automatic terminal online update"/>
  <tag name="TerminalAutoUpdateParam" id="0x3747" comment="Terminal specific parameter string for online update (e.g. a server address)"/>
  <tag name="DeviceTunnel" id="0xF748" comment="Configuration of a serial device to network tunnel"/>
  <tag name="BuddyAddress" id="0x9750" comment="IP address of buddy station"/>
  <tag name="BuddyPort" id="0x1750" comment="Port number at buddy station"/>
  <tag name="BuddyMode" id="0x1751" comment="Activation of buddy station connection">
    <enums>
      <enum name="Disabled" id="0"/>
      <enum name="Server" id="1"/>
      <enum name="Client" id="2"/>
    </enums>
  </tag>
  <tag name="PlateServerAddress" id="0x9752" comment="IP address of license plate reader"/>
  <tag name="PlateServerPort" id="0x1752" comment="Port number at license plate reader"/>
  <tag name="PlateMaxWaitTime" id="0x1753" comment="Maximum time to wait for a plate scan (ms)"/>
  <tag name="DigitalIO" id="0xC753" comment="Nested container for input/output mappings"/>
  <tag name="InputMapping" id="0xC754" comment="Nested container for a signle input assignment"/>
  <tag name="OutputMapping" id="0xC755" comment="Nested container for a single output assignment"/>
  <tag name="IODeviceIdentifier" id="0x1756" comment="Identifies an Input/Output device">
    <enums>
      <enum name="Undefined" id="0"/>
      <enum name="Local" id="1"/>
      <enum name="LED" id="2"/>
      <enum name="Backplane" id="3"/>
      <enum name="Wheeler" id="4"/>
      <enum name="ColumnIO" id="5"/>
      <enum name="TTLMagReaderIO" id="6"/>
      <enum name="eeMIO" id="200"/>
      <enum name="fpMIO" id="300"/>
    </enums>
  </tag>

  <!--Statistics-->
  <tag name="StatCoinOut" id="0x1C00" comment="Number of coins ejected (paid)"/>
  <tag name="StatCoinIn" id="0x1C01" comment="Number of coins inserted"/>
  <tag name="StatCoinToCashbox" id="0x1C02" comment="Number of coins dropped into cashbox"/>
  <tag name="StatCoinToChange" id="0x1C03" comment="Number of coins dropped to change bins"/>
  <tag name="StatCoinErrors" id="0x1C04" comment="Number of times the coin handling subsystem was in error state"/>

  <tag name="StatBillOut" id="0x1C10" comment="Number of bills ejected (paid)"/>
  <tag name="StatBillIn" id="0x1C11" comment="Number of bills inserted"/>
  <tag name="StatBillToCashbox" id="0x1C12" comment="Number of bills dropped into cashbox"/>
  <tag name="StatBillToChange" id="0x1C13" comment="Number of bills dropped to change bins"/>
  <tag name="StatBillErrors" id="0x1C14" comment="Number of times the bill handling subsystem was in error state"/>

  <tag name="StatVerifierInsert" id="0x1C20" comment="Number of times a card was inserted into the verifier"/>
  <tag name="StatVerifierEject" id="0x1C21" comment="Number of times a card was ejected by verifier"/>
  <tag name="StatVerifierCapture" id="0x1C22" comment="Number of times a ticket was captured by verifier"/>
  <tag name="StatVerifierCreate" id="0x1C23" comment="Number of times a new ticked was made by verifier (Counts once the ticket has been cut and is ready for use)"/>
  <tag name="StatVerifierErrors" id="0x1C24" comment="Number of times the verifier was in error state"/>

  <tag name="StatLaneOpen" id="0x1C30" comment="Number of times the gate opened"/>
  <tag name="StatLaneIllegalForward" id="0x1C31" comment="Number of illegal forward passes"/>
  <tag name="StatLaneIllegalReverse" id="0x1C32" comment="Number of illegal reverse passes"/>
  <tag name="StatLaneVehicle" id="0x1C33" comment="Number if times a vehicle pulled up to the station"/>

  <tag name="StatMagreaderUse" id="0x1C40" comment="Number of times the magstripe reader was used"/>

  <tag name="StatLoopA" id="0x1C50" comment="Number of times the loop was triggered."/>
  <tag name="StatLoopB" id="0x1C51" comment="Number of times the loop was triggered."/>
  <tag name="StatLoopC" id="0x1C52" comment="Number of times the loop was triggered."/>

  <tag name="StatPrinterErrors" id="0x1C64" comment="Number of times the verifier was in error state"/>

  <tag name="StatParkingTickets" id="0x1C70" comment="Number of valid parking tickets"/>
  <tag name="StatEventTickets" id="0x1C71" comment="Number of valid event tickets"/>
  <tag name="StatKeycards" id="0x1C72" comment="Number of valid credentials"/>
  <tag name="StatCreditcardTickets" id="0x1C73" comment="Number of valid sessions identified by creditcard (Credit in / Credit out)"/>

  <tag name="StatTurnover" id="0xFC00" comment="Total payment count and sum"/>
  <tag name="StatCash" id="0xFC01" comment="Cash payment count and sum"/>
  <tag name="StatCashless" id="0xFC02" comment="Cashless payment count and sum"/>
  <tag name="StatDiscount" id="0xFC03" comment="Accepted validations count and sum"/>
  <tag name="StatRefund" id="0xFC04" comment="Number of discounts and sum"/>
</mtd16>
