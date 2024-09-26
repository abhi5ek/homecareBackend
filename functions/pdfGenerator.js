const Client = require('../models/ClientServiceAgreementModel');
const ClData = require('../models/clientModel')
const Service = require('../models/servicePlan1Model');
const Cna1 = require('../models/cna1Model');
const Cna3 = require('../models/cna3Model');
const Cna4 = require('../models/cna4Model');
const Cna5 = require('../models/cna5Model');
const Cna6 = require('../models/cna6Model');
const Cna7 = require('../models/cna7Model');
const Cna8 = require('../models/cna8Model');
const Cna9 = require('../models/cna9Model');
const Cna10 = require('../models/cna10Model');
const Mnursing1 = require('../models/Mnursing1Model');
const Mnursing2 = require('../models/Mnursing21Model');
const Mnursing3 = require('../models/Mnursing3Model');
const Mnursing4 = require('../models/Mnursing4Model');
const Mnursing5 = require('../models/Mnursing5Model');
const Mnursing6 = require('../models/Mnursing6Model');
const Mnursing7 = require('../models/Mnursing7Model');
const Mnursing8 = require('../models/Mnursing8Model');
const Mnursing9 = require('../models/Mnursing9Model');
const Mnursing10 = require('../models/Mnursing10Model');
const Mnursing11 = require('../models/Mnursing11Model');
const Mnursing12 = require('../models/Mnursing12Model');
const Mnursing13 = require('../models/Mnursing13Model');
const Mnursing14 = require('../models/Mnursing14Model');
const Nnursingform1 = require('../models/Nnursingform1Model');
const Nnursingform3 = require('../models/NnursingForm3Model');
const Nnursingform4 = require('../models/NnursingForm4Model');
const Nnursingform5 = require('../models/Nnursingform5Model');
const Nnursingform6 = require('../models/Nnursingform6Model');
const Nnursingform7 = require('../models/Nnursingform7Model');
const Nnursingform8 = require('../models/Nnursingform8Model');
const Nnursingform9 = require('../models/Nnursingform9Model');
const Nnursingform10 = require('../models/Nnursingform10Model');
const Verbalform = require('../models/verbalModel');
const VisitNote1 = require('../models/Visitnote1Model');
const VisitNote2 = require('../models/VisitNote2Model');
const VisitNote3 = require('../models/VisitNote3Model');
const VisitNote4 = require('../models/VisitNote4Model');
const VisitNote5 = require('../models/VisitNote5Model');
const Satisfactionform1 = require('../models/Satisfactionform1Model');
const Satisfactionform2 = require('../models/Satisfactionform2Model');
const Faccident = require('../models/FaccidentModel');
const Invoice = require('../models/invoiceModel');


const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');
const logoPath = path.join(__dirname, '../images/favicon.png');


const PAGE_WIDTH = 595.28; // A4 width in points
const PAGE_HEIGHT = 841.89; // A4 height in points
const MARGIN = 50; // Margin from the edge of the page
const LABEL_WIDTH = 150;
const FIELD_WIDTH = PAGE_WIDTH - 2 * MARGIN - LABEL_WIDTH; // Adjusted for label width
const CELL_HEIGHT = 10; // Halved from 20
const LINE_HEIGHT = 15;

const wrapText = (text = '', maxWidth, font, fontSize) => {
    if (text === null || text === undefined) {
        console.error('wrapText received an undefined or null text value');
        return [];
    }

    const lines = [];
    let line = '';
    const words = text.split(' ');

    for (const word of words) {
        const testLine = line + word + ' ';
        const lineWidth = font.widthOfTextAtSize(testLine, fontSize);

        if (lineWidth > maxWidth) {
            lines.push(line.trim());
            line = word + ' ';
        } else {
            line = testLine;
        }
    }

    if (line) {
        lines.push(line.trim());
    }

    return lines;
};


const createPDF = async (id) => {
    try {
        // Fetch data from your database
        const client = await Client.findOne({ clientId: id });
        const clData = await ClData.findById(id);
        const service = await Service.findOne({ clientId: id });
        const cna1 = await Cna1.findOne({ clientId: id });
        const cna3 = await Cna3.findOne({ clientId: id });
        const cna4 = await Cna4.findOne({ clientId: id });
        const cna5 = await Cna5.findOne({ clientId: id });
        const cna6 = await Cna6.findOne({ clientId: id });
        const cna7 = await Cna7.findOne({ clientId: id });
        const cna8 = await Cna8.findOne({ clientId: id });
        const cna9 = await Cna9.findOne({ clientId: id });
        const cna10 = await Cna10.findOne({ clientId: id });
        const mnursing1 = await Mnursing1.find({ clientId: id });
        const mnursing2 = await Mnursing2.find({ clientId: id });
        const mnursing3 = await Mnursing3.find({ clientId: id });
        const mnursing4 = await Mnursing4.find({ clientId: id });
        const mnursing5 = await Mnursing5.find({ clientId: id });
        const mnursing6 = await Mnursing6.find({ clientId: id });
        const mnursing7 = await Mnursing7.find({ clientId: id });
        const mnursing8 = await Mnursing8.find({ clientId: id });
        const mnursing9 = await Mnursing9.find({ clientId: id });
        const mnursing10 = await Mnursing10.find({ clientId: id });
        const mnursing11 = await Mnursing11.find({ clientId: id });
        const mnursing12 = await Mnursing12.find({ clientId: id });
        const mnursing13 = await Mnursing13.find({ clientId: id });
        const mnursing14 = await Mnursing14.find({ clientId: id });
        const nnursingform1 = await Nnursingform1.find({ clientId: id });
        const nnursingform3 = await Nnursingform3.find({ clientId: id });
        const nnursingform4 = await Nnursingform4.find({ clientId: id });
        const nnursingform5 = await Nnursingform5.find({ clientId: id });
        const nnursingform6 = await Nnursingform6.find({ clientId: id });
        const nnursingform7 = await Nnursingform7.find({ clientId: id });
        const nnursingform8 = await Nnursingform8.find({ clientId: id });
        const nnursingform9 = await Nnursingform9.find({ clientId: id });
        const nnursingform10 = await Nnursingform10.find({ clientId: id });
        const verbal = await Verbalform.find({ clientId: id });
        const visitNote1 = await VisitNote1.findOne({ clientId: id });
        const visitNote2 = await VisitNote2.findOne({ clientId: id });
        const visitNote3 = await VisitNote3.findOne({ clientId: id });
        const visitNote4 = await VisitNote4.findOne({ clientId: id });
        const visitNote5 = await VisitNote5.findOne({ clientId: id });
        const satisfactionform1 = await Satisfactionform1.findOne({ clientId: id });
        const satisfactionform2 = await Satisfactionform2.findOne({ clientId: id });
        const faccident = await Faccident.findOne({ clientId: id });
        const invoice = await Invoice.find({ clientId: id });


        const pdfDoc = await PDFDocument.create();
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
        let currentY = PAGE_HEIGHT - MARGIN;

        const addNewPageIfNeeded = (requiredSpace) => {
            if (currentY - requiredSpace < MARGIN) {
                page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
                currentY = PAGE_HEIGHT - MARGIN;
            }
        };

        const drawText = (text, x, y, size, font, color) => {
            if (!text) return;
            page.drawText(text, { x, y, size, font, color });
        };

        const drawHeader = async () => {
            // Embed the logo image
            const logoImageBytes = fs.readFileSync(logoPath);
            const logoImage = await pdfDoc.embedPng(logoImageBytes);

            // Define dimensions for the logo
            const logoWidth = 100;
            const logoHeight = (logoWidth / logoImage.width) * logoImage.height;

            // Define positions for the logo and client details
            const logoX = MARGIN;
            const logoY = PAGE_HEIGHT - MARGIN - logoHeight;

            // Define margin and spacing for text
            const textMarginLeft = 200; // Increased space between the image and text
            const detailsX = logoX + logoWidth + textMarginLeft; // Start position for text

            // Draw the logo image
            page.drawImage(logoImage, {
                x: logoX,
                y: logoY,
                width: logoWidth,
                height: logoHeight,
            });

            // Draw a line under the header
            page.drawLine({
                start: { x: MARGIN, y: logoY - 10 },
                end: { x: PAGE_WIDTH - MARGIN, y: logoY - 10 },
                thickness: 1,
                color: rgb(0, 0, 0),
            });

            // Draw client details with smaller font size
            const smallFontSize = 10; // Smaller font size
            const details = [
                `ID: ${clData._id || 'Client ID'}`,
                `Name: ${clData.name || 'Client Name'}`,
                `Age: ${clData.age || 'Client Age'}`,
                `Email: ${clData.email || 'Client Email'}`,
                `Phone: ${clData.mobileNumber || 'Client Phone'}`,
                `Address: ${clData.address || 'Client Address'}`,
            ];

            // Draw text for each detail
            details.forEach((line, index) => {
                const textX = detailsX; // Fixed X position for all text lines
                const textY = logoY + logoHeight - 20 - index * (smallFontSize + 2); // Adjust Y position to fit within the header

                // Draw the text
                drawText(line, textX, textY, smallFontSize, timesRomanFont, rgb(0, 0, 0));
            });

            // Update current Y position
            currentY -= logoHeight + 40;
        };




        await drawHeader();


        const drawSection = (title, fields) => {
            addNewPageIfNeeded(25);

            drawText(title, MARGIN, currentY, 16, timesRomanFont, rgb(0.29, 0.68, 0.31));

            const titleWidth = timesRomanFont.widthOfTextAtSize(title, 16);
            page.drawLine({
                start: { x: MARGIN, y: currentY - 3 },
                end: { x: MARGIN + titleWidth, y: currentY - 3 },
                thickness: 1,
                color: rgb(0.29, 0.68, 0.31),
            });

            currentY -= 25;

            fields.forEach(({ label, value, date }) => {
                const wrappedLabel = wrapText(label || '', LABEL_WIDTH, timesRomanFont, 12);
                const wrappedValue = wrapText(value || '', FIELD_WIDTH, timesRomanFont, 12);

                const maxLines = Math.max(wrappedLabel.length, wrappedValue.length);
                const requiredHeight = maxLines * LINE_HEIGHT + CELL_HEIGHT;

                addNewPageIfNeeded(requiredHeight);

                for (let i = 0; i < maxLines; i++) {
                    const labelText = wrappedLabel[i] || '';
                    const valueText = wrappedValue[i] || '';

                    page.drawRectangle({
                        x: MARGIN,
                        y: currentY - 7,
                        width: LABEL_WIDTH - 5,
                        height: LINE_HEIGHT,
                        color: rgb(0.9, 0.9, 0.9)
                    });

                    drawText(labelText, MARGIN, currentY - 4, 12, timesRomanFont, rgb(0, 0, 0));
                    drawText(valueText, MARGIN + LABEL_WIDTH, currentY - 4, 12, timesRomanFont, rgb(0, 0, 0));

                    if (date) {
                        const dateText = new Date(date).toLocaleDateString();
                        const dateWidth = timesRomanFont.widthOfTextAtSize(dateText, 10);
                        const dateX = PAGE_WIDTH - MARGIN - dateWidth;
                        drawText(dateText, dateX, currentY - 4, 10, timesRomanFont, rgb(0.5, 0.5, 0.5));
                    }

                    currentY -= LINE_HEIGHT;
                }

                currentY -= CELL_HEIGHT;
            });

            currentY -= 30;
        };



        // Client Information Section

        client ? drawSection('Client Information', [
            { label: 'Client ID:', value: client.clientId || '' },
            { label: 'Client Name:', value: `${client.initials || ''} ${client.clientName || ''}` },
            { label: 'Address:', value: client.clientAddress || '' },
            { label: 'Insurance Provider:', value: client.insuranceProvider || '' },
        ]) : console.error('Client data is null or undefined.');

        // Signatures Section
        client ? drawSection('Signatures', [
            { label: 'Client Signature:', value: `${client.clientSignature}        ${new Date(client.clientDate).toLocaleDateString()}` },
            { label: 'Financial Representative:', value: `${client.financialSignature}         ${new Date(client.clientDate).toLocaleDateString()} ` },
            { label: 'Financial Representative:', value: `${client.representativeSignature}         ${new Date(client.clientDate).toLocaleDateString()} ` }
        ]) : console.error('Data is null or undefined.');

        // Service Details Section
        service ? drawSection('Service Details', [
            { label: 'Date of Birth:', value: service.dob ? new Date(service.dob).toLocaleDateString() : '' },
            { label: 'Address:', value: service.address || '' },
            { label: 'City:', value: service.city || '' },
            { label: 'FL:', value: service.fl || '' },
            { label: 'Telephone:', value: service.tel || '' },
            { label: 'Emergency Contact:', value: service.emergencyContact || '' },
            { label: 'Emergency Telephone:', value: service.emergencyTel || '' },
            { label: 'Health Problems:', value: service.healthProblems || '' },
            { label: 'Service Time:', value: service.serviceTime || '' },
            { label: 'Frequency DNRO:', value: service.frequency ? service.frequency.dnro : '' },
        ]) : console.error('Data is null or undefined.');

        // CNA1 Section
        cna1 ? drawSection('CNA1', [
            { label: 'Patient Name:', value: cna1.patientName || '' },
            { label: 'Gender:', value: cna1.gender || '' },
            { label: 'MR Number:', value: cna1.mrNumber || '' },
            { label: 'Date:', value: cna1.date ? new Date(cna1.date).toLocaleDateString() : '' },
            { label: 'Primary Diagnosis:', value: cna1.primaryDiagnosis || '' },
            { label: 'Secondary Diagnosis:', value: cna1.secondaryDiagnosis || '' },
            { label: 'PCP Name:', value: cna1.pcpName || '' },
            { label: 'Other Physician Name:', value: cna1.otherPhysicianName || '' },
        ]) : console.error('Data is null or undefined.');

        // CNA3 Section
        cna3 ? drawSection('CNA3', [
            { label: 'Past History:', value: cna3.pastHistory || '' },
            { label: 'Lives Alone (Yes):', value: cna3.livesAloneYes ? 'Yes' : 'No' },
            { label: 'Lives Alone (No):', value: cna3.livesAloneNo ? 'Yes' : 'No' },
            { label: 'Family Composition:', value: cna3.familyComposition || '' },
            { label: 'Legal Next of Kin:', value: cna3.legalNextToKin || '' },
            { label: 'Telephone:', value: cna3.tel || '' },
            { label: 'Caregiver Name:', value: cna3.caregiverName || '' },
            { label: 'Address:', value: cna3.address || '' },
        ]) : console.error('Data is null or undefined.');

        // CNA4 Section
        cna4 ? drawSection('CNA4', [
            { label: 'Personal Care:', value: cna4.personalCare || '' },
            { label: 'Mobility:', value: cna4.mobility || '' },
            { label: 'Med Admin:', value: cna4.medAdmin || '' },
            { label: 'Meals:', value: cna4.meals || '' },
            { label: 'Environment:', value: cna4.environment || '' },
            { label: 'Procedures:', value: cna4.procedures || '' },
            { label: 'Caregiver Name:', value: cna4.caregiverName || '' },
            { label: 'Days Time Available:', value: cna4.daysTimeAvailable || '' },
            { label: 'Comments:', value: cna4.comments || '' },
        ]) : console.error('Data is null or undefined.');

        // CNA5 Section
        cna5 ? drawSection('CNA5', [
            { label: 'Living Will:', value: cna5.livingWill ? cna5.livingWill.join(', ') : '' },
            { label: 'Provisions:', value: cna5.provisions ? cna5.provisions.join(', ') : '' },
            { label: 'ADLs:', value: cna5.adls ? cna5.adls.join(', ') : '' },
            { label: 'Safety Hazards:', value: cna5.safetyHazards ? cna5.safetyHazards.join(', ') : '' },
            { label: 'NeuroMental Status:', value: cna5.neuroMentalStatus ? cna5.neuroMentalStatus.join(', ') : '' },
            { label: 'Comments:', value: cna5.comments || '' },
        ]) : console.error('Data is null or undefined.');

        cna6 ? drawSection('Functional Limitations', [
            { label: 'Amputation:', value: cna6.functionalLimitations.amputation || '' },
            { label: 'Bowel Incontinence:', value: cna6.functionalLimitations.bowelIncontinence ? 'Yes' : 'No' },
            { label: 'Contracture:', value: cna6.functionalLimitations.contracture ? 'Yes' : 'No' },
            { label: 'Hearing:', value: cna6.functionalLimitations.hearing ? 'Yes' : 'No' },
            { label: 'Paralysis:', value: cna6.functionalLimitations.paralysis ? 'Yes' : 'No' },
            { label: 'Endurance:', value: cna6.functionalLimitations.endurance ? 'Yes' : 'No' },
            { label: 'Ambulation:', value: cna6.functionalLimitations.ambulation ? 'Yes' : 'No' },
            { label: 'Speech:', value: cna6.functionalLimitations.speech ? 'Yes' : 'No' },
            { label: 'Vision:', value: cna6.functionalLimitations.vision ? 'Yes' : 'No' },
            { label: 'Poor Manual Dexterity:', value: cna6.functionalLimitations.poorManualDexterity ? 'Yes' : 'No' },
            { label: 'Legally Blind:', value: cna6.functionalLimitations.legallyBlind ? 'Yes' : 'No' },
            { label: 'Dyspnea:', value: cna6.functionalLimitations.dyspnea ? 'Yes' : 'No' },
            { label: 'Poor Hand-Eye Coordination:', value: cna6.functionalLimitations.poorHandEyeCoordination ? 'Yes' : 'No' },
            { label: 'Unsteady Gait:', value: cna6.functionalLimitations.unsteadyGait ? 'Yes' : 'No' },
            { label: 'Poor Balance:', value: cna6.functionalLimitations.poorBalance ? 'Yes' : 'No' },
            { label: 'Other:', value: cna6.functionalLimitations.other || '' },
        ]) : console.error('Cna6 data is null or undefined.');

        cna6 ? drawSection('Activities Permitted', [
            { label: 'Complete Bedrest:', value: cna6.activitiesPermitted.completeBedrest ? 'Yes' : 'No' },
            { label: 'Bedrest BRP:', value: cna6.activitiesPermitted.bedrestBRP ? 'Yes' : 'No' },
            { label: 'Up As Tolerated:', value: cna6.activitiesPermitted.upAsTolerated ? 'Yes' : 'No' },
            { label: 'Transfer Bed To Chair:', value: cna6.activitiesPermitted.transferBedToChair ? 'Yes' : 'No' },
            { label: 'Independent In Home:', value: cna6.activitiesPermitted.independentInHome ? 'Yes' : 'No' },
            { label: 'Other:', value: cna6.activitiesPermitted.other || '' },
        ]) : console.error('Cna6 data is null or undefined.');

        cna6 ? drawSection('Fall Precaution', [
            { label: 'Risk Of Fall:', value: cna6.fallPrecaution.riskOfFall ? 'Yes' : 'No' },
            { label: 'Fall Precaution Education Provided:', value: cna6.fallPrecaution.fallPrecautionEducationProvided ? 'Yes' : 'No' },
        ]) : console.error('Cna6 data is null or undefined.');

        cna6 ? drawSection('Assistive Device', [
            { label: 'Cane:', value: cna6.assistiveDevice.cane ? 'Yes' : 'No' },
            { label: 'Quad Cane:', value: cna6.assistiveDevice.quadCane ? 'Yes' : 'No' },
            { label: 'Walker:', value: cna6.assistiveDevice.walker ? 'Yes' : 'No' },
            { label: 'Rolling Walker:', value: cna6.assistiveDevice.rollingWalker ? 'Yes' : 'No' },
            { label: 'Crutches:', value: cna6.assistiveDevice.crutches ? 'Yes' : 'No' },
            { label: 'Regular Wheelchair:', value: cna6.assistiveDevice.regWheelchair ? 'Yes' : 'No' },
            { label: 'Electric Wheelchair:', value: cna6.assistiveDevice.electricWheelchair ? 'Yes' : 'No' },
            { label: 'Other:', value: cna6.assistiveDevice.other || '' },
        ]) : console.error('Cna6 data is null or undefined.');

        cna6 ? drawSection('Equipment', [
            { label: 'Hospital Bed:', value: cna6.equipment.hospitalBed ? 'Yes' : 'No' },
            { label: 'Commode:', value: cna6.equipment.commode ? 'Yes' : 'No' },
            { label: 'Hoyer Lift:', value: cna6.equipment.hoyerLift ? 'Yes' : 'No' },
            { label: 'Nebulizer:', value: cna6.equipment.nebulizer ? 'Yes' : 'No' },
            { label: 'Bath Chair:', value: cna6.equipment.bathChair ? 'Yes' : 'No' },
            { label: 'Apnea Machine:', value: cna6.equipment.apneaMachine ? 'Yes' : 'No' },
            { label: 'Oxygen Concentrator:', value: cna6.equipment.oxygenConcentrator ? 'Yes' : 'No' },
            { label: 'Other:', value: cna6.equipment.other || '' },
            { label: 'Device Equipment Needed At Home:', value: cna6.equipment.deviceEquipmentNeededAtHome || '' },
        ]) : console.error('Cna6 data is null or undefined.');


        cna7
            ? drawSection('Skin Assessment', [
                { label: 'Client Denies Problems:', value: cna7.integumentAssessment.skin.clientDeniesProblems ? 'Yes' : 'No' || 'N/A' },
            ])
            : console.error('CNA7 data is null or undefined.');

        cna7
            ? drawSection('Color', [
                { label: 'Normal:', value: cna7.integumentAssessment.color.normal ? 'Yes' : 'No' || 'N/A' },
                { label: 'Pink:', value: cna7.integumentAssessment.color.pink ? 'Yes' : 'No' || 'N/A' },
                { label: 'Pale:', value: cna7.integumentAssessment.color.pale ? 'Yes' : 'No' || 'N/A' },
                { label: 'Cyanotic:', value: cna7.integumentAssessment.color.cyanotic ? 'Yes' : 'No' || 'N/A' },
                { label: 'Jaundiced:', value: cna7.integumentAssessment.color.jaundiced ? 'Yes' : 'No' || 'N/A' },
            ])
            : console.error('CNA7 data is null or undefined.');

        cna7
            ? drawSection('Temperature', [
                { label: 'Hot:', value: cna7.integumentAssessment.temperature.hot ? 'Yes' : 'No' || 'N/A' },
                { label: 'Warm:', value: cna7.integumentAssessment.temperature.warm ? 'Yes' : 'No' || 'N/A' },
                { label: 'Cool:', value: cna7.integumentAssessment.temperature.cool ? 'Yes' : 'No' || 'N/A' },
            ])
            : console.error('CNA7 data is null or undefined.');

        cna7
            ? drawSection('Condition', [
                { label: 'Dry:', value: cna7.integumentAssessment.condition.dry ? 'Yes' : 'No' || 'N/A' },
                { label: 'Moist:', value: cna7.integumentAssessment.condition.moist ? 'Yes' : 'No' || 'N/A' },
                { label: 'Ecchymosis:', value: cna7.integumentAssessment.condition.ecchymosis ? 'Yes' : 'No' || 'N/A' },
                { label: 'Rash:', value: cna7.integumentAssessment.condition.rash ? 'Yes' : 'No' || 'N/A' },
                { label: 'Petechie:', value: cna7.integumentAssessment.condition.petechie ? 'Yes' : 'No' || 'N/A' },
                { label: 'Itch:', value: cna7.integumentAssessment.condition.itch ? 'Yes' : 'No' || 'N/A' },
                { label: 'Redness:', value: cna7.integumentAssessment.condition.redness ? 'Yes' : 'No' || 'N/A' },
                { label: 'Bruises:', value: cna7.integumentAssessment.condition.bruises ? 'Yes' : 'No' || 'N/A' },
                { label: 'Scaling:', value: cna7.integumentAssessment.condition.scaling ? 'Yes' : 'No' || 'N/A' },
                { label: 'Comment:', value: cna7.integumentAssessment.condition.comment || 'N/A' },
                { label: 'Open Wound Location:', value: cna7.integumentAssessment.condition.openWoundLocation || 'N/A' },
                { label: 'Describe:', value: cna7.integumentAssessment.condition.describe || 'N/A' },
            ])
            : console.error('CNA7 data is null or undefined.');

        cna7
            ? drawSection('Skin Problems', [
                { label: 'Lesion:', value: cna7.integumentAssessment.skinProblems.lesion ? 'Yes' : 'No' || 'N/A' },
                { label: 'Scaling:', value: cna7.integumentAssessment.skinProblems.scaling ? 'Yes' : 'No' || 'N/A' },
                { label: 'Wound:', value: cna7.integumentAssessment.skinProblems.wound ? 'Yes' : 'No' || 'N/A' },
                { label: 'Ulcer:', value: cna7.integumentAssessment.skinProblems.ulcer ? 'Yes' : 'No' || 'N/A' },
                { label: 'Incision:', value: cna7.integumentAssessment.skinProblems.incision ? 'Yes' : 'No' || 'N/A' },
                { label: 'Petechie:', value: cna7.integumentAssessment.skinProblems.petechie ? 'Yes' : 'No' || 'N/A' },
                { label: 'Rash:', value: cna7.integumentAssessment.skinProblems.rash ? 'Yes' : 'No' || 'N/A' },
                { label: 'Ostomy:', value: cna7.integumentAssessment.skinProblems.ostomy ? 'Yes' : 'No' || 'N/A' },
                { label: 'Cyst:', value: cna7.integumentAssessment.skinProblems.cyst ? 'Yes' : 'No' || 'N/A' },
                { label: 'Masses:', value: cna7.integumentAssessment.skinProblems.masses ? 'Yes' : 'No' || 'N/A' },
                { label: 'Itch:', value: cna7.integumentAssessment.skinProblems.itch ? 'Yes' : 'No' || 'N/A' },
                { label: 'Other:', value: cna7.integumentAssessment.skinProblems.other ? 'Yes' : 'No' || 'N/A' },
                { label: 'Describe:', value: cna7.integumentAssessment.skinProblems.describe || 'N/A' },
            ])
            : console.error('CNA7 data is null or undefined.');

        cna8 ? drawSection('Pain Assessment', [
            { label: 'Area of Pain:', value: cna8.area || 'N/A' },
            { label: 'Pain is Better With:', value: cna8.painBetter || 'N/A' },
            { label: 'Pain is Worse With:', value: cna8.painWorse || 'N/A' },
            { label: 'Medication:', value: cna8.medication || 'N/A' },
        ]) : console.error('CNA8 data is null or undefined.');

        cna9 ? drawSection('Ambulation', [
            { label: 'Unable to Do:', value: cna9.ambulation[0]?.unableToDo || 'N/A' },
            { label: 'Minimal Assistance:', value: cna9.ambulation[0]?.minimalAssistance || 'N/A' },
            { label: 'Moderate Assistance:', value: cna9.ambulation[0]?.moderateAssistance || 'N/A' },
            { label: 'Maximal Assistance:', value: cna9.ambulation[0]?.maximalAssistance || 'N/A' },
            { label: 'Independent:', value: cna9.ambulation[0]?.independent || 'N/A' },
        ]) : console.error('CNA9 data is null or undefined.');

        cna9 ? drawSection('Stairs', [
            { label: 'Unable to Do:', value: cna9.stairs[0]?.unableToDo || 'N/A' },
            { label: 'Minimal Assistance:', value: cna9.stairs[0]?.minimalAssistance || 'N/A' },
            { label: 'Moderate Assistance:', value: cna9.stairs[0]?.moderateAssistance || 'N/A' },
            { label: 'Maximal Assistance:', value: cna9.stairs[0]?.maximalAssistance || 'N/A' },
            { label: 'Independent:', value: cna9.stairs[0]?.independent || 'N/A' },
        ]) : console.error('CNA9 data is null or undefined.');

        cna9 ? drawSection('Dressing', [
            { label: 'Unable to Do:', value: cna9.dressing[0]?.unableToDo || 'N/A' },
            { label: 'Minimal Assistance:', value: cna9.dressing[0]?.minimalAssistance || 'N/A' },
            { label: 'Moderate Assistance:', value: cna9.dressing[0]?.moderateAssistance || 'N/A' },
            { label: 'Maximal Assistance:', value: cna9.dressing[0]?.maximalAssistance || 'N/A' },
            { label: 'Independent:', value: cna9.dressing[0]?.independent || 'N/A' },
        ]) : console.error('CNA9 data is null or undefined.');

        cna9 ? drawSection('Feeding', [
            { label: 'Unable to Do:', value: cna9.feeding[0]?.unableToDo || 'N/A' },
            { label: 'Minimal Assistance:', value: cna9.feeding[0]?.minimalAssistance || 'N/A' },
            { label: 'Moderate Assistance:', value: cna9.feeding[0]?.moderateAssistance || 'N/A' },
            { label: 'Maximal Assistance:', value: cna9.feeding[0]?.maximalAssistance || 'N/A' },
            { label: 'Independent:', value: cna9.feeding[0]?.independent || 'N/A' },
        ]) : console.error('CNA9 data is null or undefined.');

        cna9 ? drawSection('Household Tasks', [
            { label: 'Unable to Do:', value: cna9.householdtask[0]?.unableToDo || 'N/A' },
            { label: 'Minimal Assistance:', value: cna9.householdtask[0]?.minimalAssistance || 'N/A' },
            { label: 'Moderate Assistance:', value: cna9.householdtask[0]?.moderateAssistance || 'N/A' },
            { label: 'Maximal Assistance:', value: cna9.householdtask[0]?.maximalAssistance || 'N/A' },
            { label: 'Independent:', value: cna9.householdtask[0]?.independent || 'N/A' },
        ]) : console.error('CNA9 data is null or undefined.');

        cna9 ? drawSection('Transfer', [
            { label: 'Unable to Do:', value: cna9.transfer[0]?.unableToDo || 'N/A' },
            { label: 'Minimal Assistance:', value: cna9.transfer[0]?.minimalAssistance || 'N/A' },
            { label: 'Moderate Assistance:', value: cna9.transfer[0]?.moderateAssistance || 'N/A' },
            { label: 'Maximal Assistance:', value: cna9.transfer[0]?.maximalAssistance || 'N/A' },
            { label: 'Independent:', value: cna9.transfer[0]?.independent || 'N/A' },
        ]) : console.error('CNA9 data is null or undefined.');

        cna9 ? drawSection('Self Care', [
            { label: 'Unable to Do:', value: cna9.selfcare[0]?.unableToDo || 'N/A' },
            { label: 'Minimal Assistance:', value: cna9.selfcare[0]?.minimalAssistance || 'N/A' },
            { label: 'Moderate Assistance:', value: cna9.selfcare[0]?.moderateAssistance || 'N/A' },
            { label: 'Maximal Assistance:', value: cna9.selfcare[0]?.maximalAssistance || 'N/A' },
            { label: 'Independent:', value: cna9.selfcare[0]?.independent || 'N/A' },
        ]) : console.error('CNA9 data is null or undefined.');

        cna9 ? drawSection('Toileting', [
            { label: 'Unable to Do:', value: cna9.toilating[0]?.unableToDo || 'N/A' },
            { label: 'Minimal Assistance:', value: cna9.toilating[0]?.minimalAssistance || 'N/A' },
            { label: 'Moderate Assistance:', value: cna9.toilating[0]?.moderateAssistance || 'N/A' },
            { label: 'Maximal Assistance:', value: cna9.toilating[0]?.maximalAssistance || 'N/A' },
            { label: 'Independent:', value: cna9.toilating[0]?.independent || 'N/A' },
        ]) : console.error('CNA9 data is null or undefined.');


        cna10 ? drawSection('CNA10 Information', [
            // { label: 'Client ID:', value: cna10.clientId || 'N/A' },
            { label: 'Review:', value: cna10.Review.length > 0 ? cna10.Review.join(', ') : 'N/A' },
            { label: 'CNA Name:', value: cna10.cnaName || 'N/A' },
            { label: 'CNA Signature:', value: cna10.cnaSignature || 'N/A' },
            { label: 'Date:', value: cna10.date ? cna10.date.toDateString() : 'N/A' },
            { label: 'Comments:', value: cna10.comments || 'N/A' },
        ]) : console.error('CNA10 data is null or undefined.');

        Array.isArray(mnursing1) && mnursing1.length
            ? mnursing1.map((item) =>
                drawSection('Client Information', [
                    { label: 'Date:', value: item.date ? new Date(item.date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: true }) : 'N/A' },
                    { label: 'Admission Date:', value: item.admissionDate ? new Date(item.admissionDate).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: true }) : 'N/A' },
                    { label: 'Client:', value: String(item.client || 'N/A') },
                    { label: 'Phone:', value: String(item.phone || 'N/A') },
                    { label: 'Date of Birth:', value: item.dob ? new Date(item.dob).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: true }) : 'N/A' },
                    { label: 'SSN:', value: String(item.ssn || 'N/A') },
                    { label: 'Age:', value: String(item.age || 'N/A') },
                    { label: 'Race:', value: String(item.race || 'N/A') },
                    { label: 'Sex:', value: String(item.sex || 'N/A') },
                    { label: 'Emergency Contact:', value: String(item.emergencyContact || 'N/A') },
                    { label: 'Emergency Relationship:', value: String(item.emergencyRel || 'N/A') },
                    { label: 'Emergency Phone:', value: String(item.emergencyPhone || 'N/A') },
                    { label: 'Responsible Party:', value: String(item.responsibleParty || 'N/A') },
                    { label: 'Responsible Phone:', value: String(item.responsiblePhone || 'N/A') },
                    { label: 'Advance Directive:', value: item.advanceDirective ? 'Yes' : 'No' },
                    { label: 'Advance Directive Copy on File:', value: item.adCopyOnFile ? 'Yes' : 'No' },
                    { label: 'DNR:', value: item.dnr ? 'Yes' : 'No' },
                    { label: 'DNR Copy on File:', value: item.dnrCopyOnFile ? 'Yes' : 'No' },
                    { label: 'POA:', value: item.poa ? 'Yes' : 'No' },
                    { label: 'POA Copy on File:', value: item.poaCopyOnFile ? 'Yes' : 'No' },
                    { label: 'POA Name:', value: String(item.poaName || 'N/A') },
                    { label: 'Primary Language:', value: String(item.primaryLanguage || 'N/A') },
                    { label: 'Cultural Customs:', value: String(item.culturalCustoms || 'N/A') },
                    { label: 'Other Comments:', value: String(item.otherComments || 'N/A') }
                ])
            )
            : console.error('Mnursing1 data is null, undefined, or not an array.');

        // Assuming mnursing2 to mnursing14 are arrays of objects

        mnursing2.length && Array.isArray(mnursing2)
            ? (
                drawSection('Nursing Assessment - General Information', []),
                mnursing2.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Admitted From:', value: item.admittedFrom || 'N/A' },
                        { label: 'Allergies:', value: item.allergies || 'N/A' },
                        { label: 'Diagnosis:', value: item.diagnosis || 'N/A' },
                        { label: 'Chief Complaints:', value: item.chiefComplaints || 'N/A' },
                        { label: 'Reason for Admission:', value: item.reasonForAdmission || 'N/A' },
                        { label: 'Home Social:', value: item.homeSocial || 'N/A' },
                        { label: 'Hospital Stays:', value: item.hospitalStays || 'N/A' },
                        { label: 'Comments:', value: item.comments || 'N/A' }
                    ])
                )
            )
            : console.error('mnursing2 data is null, undefined, or not an array.');

        mnursing3.length && Array.isArray(mnursing3)
            ? (
                drawSection('Patient Information', []),
                mnursing3.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Patient Name:', value: String(item.patientName || 'N/A') },
                        { label: 'Date of Birth:', value: item.dob ? new Date(item.dob).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Temperature:', value: String(item.temp || 'N/A') },
                        { label: 'Blood Pressure (Sitting):', value: String(item.bpSit || 'N/A') },
                        { label: 'Blood Pressure (Standing):', value: String(item.bpStand || 'N/A') },
                        { label: 'Pulse:', value: String(item.pulse || 'N/A') },
                        { label: 'Respiration:', value: String(item.resp || 'N/A') },
                        { label: 'Height:', value: String(item.height || 'N/A') },
                        { label: 'Weight:', value: String(item.weight || 'N/A') }
                    ])
                )
            )
            : console.error('mnursing3 data is null, undefined, or not an array.');

        mnursing4.length && Array.isArray(mnursing4)
            ? (
                drawSection('Nursing Assessment', []),
                mnursing4.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Intensity:', value: String(item.intensity || 'N/A') },
                        { label: 'Location:', value: String(item.location || 'N/A') },
                        { label: 'Duration:', value: String(item.duration || 'N/A') },
                        { label: 'Controlled:', value: String(item.controlled || 'N/A') },
                        { label: 'Controlled By:', value: String(item.controlledBy || 'N/A') },
                        { label: 'Comments:', value: String(item.comments || 'N/A') },
                        { label: 'Denies Problems:', value: item.deniesProblems ? 'Yes' : 'No' }
                    ])
                )
            )
            : console.error('mnursing4 data is null, undefined, or not an array.');

        mnursing5.length && Array.isArray(mnursing5)
            ? (
                drawSection('Nursing Assessment - Sensory', []),
                mnursing5.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Eyes:', value: item.eyes.length ? item.eyes.join(', ') : 'N/A' },
                        { label: 'Right Eye (R):', value: String(item.eyesR || 'N/A') },
                        { label: 'Left Eye (L):', value: String(item.eyesL || 'N/A') },
                        { label: 'Nose:', value: item.nose.length ? item.nose.join(', ') : 'N/A' },
                        { label: 'Oral:', value: item.oral.length ? item.oral.join(', ') : 'N/A' },
                        { label: 'Throat:', value: item.throat.length ? item.throat.join(', ') : 'N/A' },
                        { label: 'Ears:', value: item.ears.length ? item.ears.join(', ') : 'N/A' },
                        { label: 'Comments:', value: String(item.comments || 'N/A') },
                        { label: 'Denies Problems:', value: item.deniesProblems ? 'Yes' : 'No' }
                    ])
                )
            )
            : console.error('mnursing5 data is null, undefined, or not an array.');

        mnursing6.length && Array.isArray(mnursing6)
            ? (
                drawSection('Nursing Assessment - Neurological', []),
                mnursing6.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Neurological Findings:', value: item.neurological.length ? item.neurological.join(', ') : 'N/A' },
                        { label: 'Comments:', value: String(item.comments || 'N/A') },
                        { label: 'Denies Problems:', value: item.deniesProblems ? 'Yes' : 'No' }
                    ])
                )
            )
            : console.error('mnursing6 data is null, undefined, or not an array.');

        mnursing7.length && Array.isArray(mnursing7)
            ? (
                drawSection('Nursing Assessment - Skin', []),
                mnursing7.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Color:', value: item.color.length ? item.color.join(', ') : 'N/A' },
                        { label: 'Temperature:', value: item.temperature.length ? item.temperature.join(', ') : 'N/A' },
                        { label: 'Turgor:', value: item.turgor.length ? item.turgor.join(', ') : 'N/A' },
                        { label: 'Condition:', value: item.condition.length ? item.condition.join(', ') : 'N/A' },
                        { label: 'Comments:', value: String(item.comments || 'N/A') }
                    ])
                )
            )
            : console.error('mnursing7 data is null, undefined, or not an array.');

        mnursing8.length && Array.isArray(mnursing8)
            ? (
                drawSection('Nursing Assessment - Edema and Pacemaker Settings', []),
                mnursing8.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Selected Options:', value: item.selectedOptions.length ? item.selectedOptions.join(', ') : 'N/A' },
                        { label: 'Edema:', value: item.edema || 'N/A' },
                        { label: 'Pacemaker Setting:', value: item.pacemakerSetting || 'N/A' },
                        { label: 'Date Checked:', value: item.dateChecked ? new Date(item.dateChecked).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Comments:', value: item.comments || 'N/A' },
                        { label: 'Denies Problems:', value: item.deniesProblems ? 'Yes' : 'No' }
                    ])
                )
            )
            : console.error('mnursing8 data is null, undefined, or not an array.');

        mnursing9.length && Array.isArray(mnursing9)
            ? (
                drawSection('Nursing Assessment - Gastrointestinal', []),
                mnursing9.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Gastrointestinal Options:', value: item.GastroOptions.length ? item.GastroOptions.join(', ') : 'N/A' },
                        { label: 'Bowel Sounds:', value: item.bowelSounds || 'N/A' },
                        { label: 'Ostomy Type:', value: item.ostomyType || 'N/A' },
                        { label: 'Comments:', value: item.comments || 'N/A' },
                        { label: 'Denies Problems:', value: item.deniesProblems ? 'Yes' : 'No' }
                    ])
                )
            )
            : console.error('mnursing9 data is null, undefined, or not an array.');

        mnursing10.length && Array.isArray(mnursing10)
            ? (
                drawSection('Nursing Assessment - Genitourinary', []),
                mnursing10.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'GU Options:', value: Array.isArray(item.GUOptions) && item.GUOptions.length ? item.GUOptions.join(', ') : 'N/A' },
                        { label: 'Catheter Type:', value: item.catheterType || 'N/A' },
                        { label: 'Catheter Size (F):', value: item.catheterSizeF || 'N/A' },
                        { label: 'Catheter Size (CC):', value: item.catheterSizeCC || 'N/A' },
                        { label: 'Comments:', value: item.comments || 'N/A' },
                        { label: 'Denies Problems:', value: item.deniesProblems ? 'Yes' : 'No' }
                    ])
                )
            )
            : console.error('mnursing10 data is null, undefined, or not an array.');

        mnursing11.length && Array.isArray(mnursing11)
            ? (
                drawSection('Nursing Assessment - Respiratory and Symptoms', []),
                mnursing11.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Respiratory Rate:', value: item.respiratoryRate || 'N/A' },
                        { label: 'Breath Sounds:', value: Array.isArray(item.breathSounds) && item.breathSounds.length ? item.breathSounds.join(', ') : 'N/A' },
                        { label: 'Lung Auscultation:', value: item.lungAuscultation?.inspExp ? 'Yes' : 'No' },
                        { label: 'Comments:', value: item.comments || 'N/A' }
                    ])
                )
            )
            : console.error('mnursing11 data is null, undefined, or not an array.');

        mnursing12.length && Array.isArray(mnursing12)
            ? (
                drawSection('Nursing Assessment - Cardiovascular', []),
                mnursing12.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Heart Rate:', value: item.heartRate || 'N/A' },
                        { label: 'Heart Sounds:', value: Array.isArray(item.heartSounds) && item.heartSounds.length ? item.heartSounds.join(', ') : 'N/A' },
                        { label: 'Comments:', value: item.comments || 'N/A' },
                        { label: 'Denies Problems:', value: item.deniesProblems ? 'Yes' : 'No' }
                    ])
                )
            )
            : console.error('mnursing12 data is null, undefined, or not an array.');

        mnursing13.length && Array.isArray(mnursing13)
            ? (
                drawSection('Nursing Assessment - Musculoskeletal', []),
                mnursing13.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Musculoskeletal Options:', value: Array.isArray(item.musculoskeletalOptions) && item.musculoskeletalOptions.length ? item.musculoskeletalOptions.join(', ') : 'N/A' },
                        { label: 'Mobility:', value: item.mobility || 'N/A' },
                        { label: 'Comments:', value: item.comments || 'N/A' },
                        { label: 'Denies Problems:', value: item.deniesProblems ? 'Yes' : 'No' }
                    ])
                )
            )
            : console.error('mnursing13 data is null, undefined, or not an array.');

        mnursing14.length && Array.isArray(mnursing14)
            ? (
                drawSection('Nursing Assessment - Cognitive', []),
                mnursing14.map((item) =>
                    drawSection('', [
                        { label: 'Date:', value: item.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Cognitive Status:', value: item.cognitiveStatus || 'N/A' },
                        { label: 'Comments:', value: item.comments || 'N/A' },
                        { label: 'Denies Problems:', value: item.deniesProblems ? 'Yes' : 'No' }
                    ])
                )
            )
            : console.error('mnursing14 data is null, undefined, or not an array.');


        nnursingform1.length && Array.isArray(nnursingform1)
            ? (
                drawSection('Nursing Form 1 - Patient Details', []),
                nnursingform1.map((form) =>
                    drawSection('', [
                        { label: 'Date:', value: form.createdAt ? new Date(form.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Patient Name:', value: form.patientName || 'N/A' },
                        { label: 'Date of Birth:', value: form.dob ? new Date(form.dob).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Temperature:', value: form.vitalsign?.temp || 'N/A' },
                        { label: 'Blood Pressure (Sitting):', value: form.vitalsign?.bpSit || 'N/A' },
                        { label: 'Blood Pressure (Standing):', value: form.vitalsign?.bpStand || 'N/A' },
                        { label: 'Pulse:', value: form.vitalsign?.pulse || 'N/A' },
                        { label: 'Respiration Rate:', value: form.vitalsign?.resp || 'N/A' },
                        { label: 'Height:', value: form.vitalsign?.height || 'N/A' },
                        { label: 'Weight:', value: form.vitalsign?.weight || 'N/A' },
                        { label: 'Blood Sugar:', value: form.vitalsign?.bs || 'N/A' }
                    ])
                )
            )
            : console.error('nnursingform1 data is null, undefined, or not an array.');


        nnursingform3.length && Array.isArray(nnursingform3)
            ? (
                drawSection('Nursing Form 3 - Pain Assessment', []),
                nnursingform3.map((form) =>
                    drawSection('', [
                        { label: 'Date:', value: form.createdAt ? new Date(form.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Intensity:', value: form.intensity || 'N/A' },
                        { label: 'Location:', value: form.location || 'N/A' },
                        { label: 'Duration:', value: form.duration || 'N/A' },
                        { label: 'Controlled:', value: form.controlled ? 'Yes' : 'No' },
                        { label: 'Controlled By:', value: form.controlledBy || 'N/A' },
                        { label: 'Comments:', value: form.comments || 'N/A' },
                        { label: 'Denies Problems:', value: form.deniesProblems ? 'Yes' : 'No' }
                    ])
                )
            )
            : console.error('nnursingform3 data is null, undefined, or not an array.');



        nnursingform4.length && Array.isArray(nnursingform4)
            ? (
                drawSection('Nursing Form 4 - Cardiac Assessment', []),
                nnursingform4.map((form) =>
                    drawSection('', [
                        { label: 'Date:', value: form.createdAt ? new Date(form.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'No Deficit:', value: form.noDeficit ? 'Yes' : 'No' }, // Accessing 'form' instead of 'nnursingform4'
                        { label: 'Cardiovascular Symptoms:', value: Array.isArray(form.cardioSymptoms) && form.cardioSymptoms?.length ? form.cardioSymptoms.join(', ') : 'None' }, // Accessing 'form' and using optional chaining
                        { label: 'Cardiovascular Comments:', value: form.cardioComments || 'N/A' } // Accessing 'form' instead of 'nnursingform4'
                    ])
                )
            )
            : console.error('nnursingform4 data is null, undefined, or not an array.');



        nnursingform5.length && Array.isArray(nnursingform5)
            ? (
                drawSection('Nursing Form 5 - Neurological and Mental Assessment', []),
                nnursingform5.map((form) =>
                    drawSection('', [
                        { label: 'Date:', value: form.createdAt ? new Date(form.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'No Deficit:', value: form.noDeficit ? 'Yes' : 'No' },
                        { label: 'Neurological Symptoms:', value: Array.isArray(form.neuroSymptoms) && form.neuroSymptoms.length ? form.neuroSymptoms.join(', ') : 'None' },
                        { label: 'Mental Symptoms:', value: Array.isArray(form.mentalSymptoms) && form.mentalSymptoms.length ? form.mentalSymptoms.join(', ') : 'None' },
                        { label: 'Mental Comments:', value: form.mentalComments || 'N/A' }
                    ]))
            )
            : console.error('Nnursingform5 data is null or undefined.');

        nnursingform6.length && Array.isArray(nnursingform6)
            ? (
                drawSection('Nursing Form 6 - Gastrointestinal Assessment', []),
                nnursingform6.map((form) =>
                    drawSection('', [
                        { label: 'Date:', value: form.createdAt ? new Date(form.createdAt).toISOString().split('T')[0] : 'N/A' },
                        { label: 'Anorexia:', value: form.gastrointestinal?.anorexia ? 'Yes' : 'No' },
                        { label: 'Nausea:', value: form.gastrointestinal?.nausea ? 'Yes' : 'No' },
                        { label: 'Vomiting:', value: form.gastrointestinal?.vomiting ? 'Yes' : 'No' },
                        { label: 'Bowel Sounds:', value: form.gastrointestinal?.bowelSounds ? 'Present' : 'Absent' },
                        { label: 'Last BM:', value: form.gastrointestinal?.lastBM || 'N/A' },
                        { label: 'Abdomen Soft/Tender:', value: form.gastrointestinal?.abdomenSoftTender ? 'Yes' : 'No' },
                        { label: 'Diarrhea:', value: form.gastrointestinal?.diarrhea ? 'Yes' : 'No' },
                        { label: 'Constipation:', value: form.gastrointestinal?.constipation ? 'Yes' : 'No' },
                        { label: 'Incontinence:', value: form.gastrointestinal?.incontinence ? 'Yes' : 'No' },
                        { label: 'Ostomy Type:', value: form.gastrointestinal?.ostomyType || 'N/A' },
                        { label: 'Enteral Feeding Type:', value: form.gastrointestinal?.enteralFeedingType || 'N/A' },
                        { label: 'Enteral Feeding Via:', value: form.gastrointestinal?.enteralFeedingVia || 'N/A' },
                        { label: 'Enteral Feeding Flushing:', value: form.gastrointestinal?.enteralFeedingFlushing || 'N/A' }
                    ])
                )
            ) : console.error('Nnursingform6 data is null, undefined, or not an array.');

        // Nursing Form 7 - GU Assessment
        // Nursing Form 7 - GU Assessment
        Array.isArray(nnursingform7) && nnursingform7.length
            ? (
                drawSection('Nursing Form 7 - GU Assessment', []),
                nnursingform7.map((item) =>
                    drawSection('', [
                        { label: 'No Deficit:', value: item.GU.noDeficit ? 'No Deficit' : 'Deficit Present' },
                        { label: 'Frequency:', value: item.GU.frequency ? 'Yes' : 'No' },
                        { label: 'Urgency:', value: item.GU.urgency ? 'Yes' : 'No' },
                        { label: 'Hesitancy:', value: item.GU.hesitancy ? 'Yes' : 'No' },
                        { label: 'Odor:', value: item.GU.odor ? 'Present' : 'Absent' },
                        { label: 'Burning:', value: item.GU.burning ? 'Yes' : 'No' },
                        { label: 'Retention:', value: item.GU.retention ? 'Yes' : 'No' },
                        { label: 'Incontinence:', value: item.GU.incontinence ? 'Yes' : 'No' },
                        { label: 'Dysuria:', value: item.GU.dysuria ? 'Yes' : 'No' },
                        { label: 'Catheter Irrigation:', value: item.GU.catheter.irrigation ? 'Yes' : 'No' },
                        { label: 'Catheter Last Change:', value: item.GU.catheter.lastChange || 'N/A' },
                        { label: 'Vaginal Bleeding:', value: item.GU.catheter.vaginalBleeding ? 'Yes' : 'No' },
                        { label: 'Discharge:', value: item.GU.catheter.discharge ? 'Yes' : 'No' },
                        { label: 'Comments:', value: item.GU.comments || 'N/A' }
                    ])
                )
            )
            : console.error('Nnursingform7 data is null, undefined, or not an array.');

        // Nursing Form 8 - Symptoms Assessment
        Array.isArray(nnursingform8) && nnursingform8.length
            ? (
                drawSection('Nursing Form 8 - Symptoms Assessment', []),
                nnursingform8.map((item) =>
                    drawSection('', [
                        { label: 'Skin Symptoms:', value: Array.isArray(item.skinSymptoms) && item.skinSymptoms.length ? item.skinSymptoms.join(', ') : 'N/A' },
                        { label: 'Respiratory Symptoms:', value: Array.isArray(item.respiratorySymptoms) && item.respiratorySymptoms.length ? item.respiratorySymptoms.join(', ') : 'N/A' },
                        { label: 'Musculoskeletal Symptoms:', value: Array.isArray(item.musculoskeletalSymptoms) && item.musculoskeletalSymptoms.length ? item.musculoskeletalSymptoms.join(', ') : 'N/A' }
                    ])
                )
            )
            : console.error('Nnursingform8 data is null, undefined, or not an array.');

        // Wound Assessment - Detailed Report
        Array.isArray(nnursingform9) && nnursingform9.length
            ? (
                drawSection('Wound Assessment - Detailed Report', []),
                nnursingform9.map((item) =>
                    drawSection('', [
                        { label: 'Location:', value: Array.isArray(item.location) && item.location.length ? item.location.join(', ') : 'N/A' },
                        { label: 'Stage:', value: Array.isArray(item.stage) && item.stage.length ? item.stage.join(', ') : 'N/A' },
                        { label: 'Length:', value: Array.isArray(item.length) && item.length.length ? item.length.join(', ') : 'N/A' },
                        { label: 'Width:', value: Array.isArray(item.width) && item.width.length ? item.width.join(', ') : 'N/A' },
                        { label: 'Depth:', value: Array.isArray(item.depth) && item.depth.length ? item.depth.join(', ') : 'N/A' },
                        { label: 'Drainage:', value: Array.isArray(item.drainage) && item.drainage.length ? item.drainage.join(', ') : 'N/A' },
                        { label: 'Tunneling:', value: Array.isArray(item.tunneling) && item.tunneling.length ? item.tunneling.join(', ') : 'N/A' },
                        { label: 'Odor:', value: Array.isArray(item.odor) && item.odor.length ? item.odor.join(', ') : 'N/A' },
                        { label: 'Sur Tissue:', value: Array.isArray(item.surTissue) && item.surTissue.length ? item.surTissue.join(', ') : 'N/A' },
                        { label: 'Edema:', value: Array.isArray(item.edema) && item.edema.length ? item.edema.join(', ') : 'N/A' }
                    ])
                )
            )
            : console.error('Nnursingform9 data is null, undefined, or not an array.');

        // Narrative Form - Detailed Report
        Array.isArray(nnursingform10) && nnursingform10.length
            ? (
                drawSection('Narrative Form - Detailed Report', []),
                nnursingform10.map((item) =>
                    drawSection('', [
                        { label: 'Narrative:', value: item.narrative || 'N/A' },
                        { label: 'Initials:', value: item.initials || 'N/A' },
                        { label: 'Date:', value: item.date ? new Date(item.date).toLocaleDateString() : 'N/A' },
                        { label: 'Nurse Signature:', value: item.nurseSignature || 'N/A' }
                    ])
                )
            )
            : console.error('Nnursingform10 data is null, undefined, or not an array.');

        // Verbal Order - Detailed Report
        Array.isArray(verbal) && verbal.length
            ? (
                drawSection('Verbal Order - Detailed Report', []),
                verbal.map((item) =>
                    drawSection('', [
                        { label: 'Client Name:', value: item.clientName || 'N/A' },
                        { label: 'Date of Birth:', value: item.dob ? item.dob.toISOString().split('T')[0] : 'N/A' },
                        { label: 'Date:', value: item.date ? item.date.toISOString().split('T')[0] : 'N/A' },
                        { label: 'Time:', value: item.time || 'N/A' },
                        { label: 'Order:', value: item.order || 'N/A' },
                        { label: 'Nurse Signature:', value: item.nurseSign || 'N/A' },
                        { label: 'Patient Name:', value: item.patientName || 'N/A' },
                        { label: 'Physician Signature:', value: item.physicianSign || 'N/A' },
                        { label: 'Printed Name:', value: item.printedName || 'N/A' }
                    ])
                )
            )
            : console.error('Verbal data is null, undefined, or not an array.');

        // Invoice - Detailed Report
        Array.isArray(invoice) && invoice.length
            ? (
                drawSection('Invoice - Detailed Report', []),
                invoice.map((item) =>
                    drawSection('', [
                        { label: 'Contractor Name:', value: item.contractorName || 'N/A' },
                        { label: 'Client Name:', value: item.clientName || 'N/A' },
                        { label: 'Tasks:', value: item.tasks || 'N/A' },
                        { label: 'Notes:', value: item.notes || 'N/A' },
                        { label: 'Total Hours Worked:', value: item.totalHoursWorked || 'N/A' },
                        { label: 'Consumer Signature:', value: item.consumerSignature || 'N/A' },
                        { label: 'Contractor Signature:', value: item.contractorSignature || 'N/A' },
                        { label: 'Created At:', value: item.date ? new Date(item.date).toLocaleDateString() : 'N/A' }
                    ])
                )
            )
            : console.error('Invoice data is null, undefined, or not an array.');


        const personalCareMap = visitNote1 ? visitNote1.personalCare : "";

        const formatPersonalCareSection = (personalCareMap) => {  
            return [
                { label: 'Dress/undress:', value: personalCareMap.get('Dress/undress')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: personalCareMap.get('Dress/undress')?.caregiverNotes || 'N/A' },
                { label: 'Bathing:', value: personalCareMap.get('Bathing')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: personalCareMap.get('Bathing')?.caregiverNotes || 'N/A' },
                { label: 'Oral hygiene:', value: personalCareMap.get('Oral hygiene')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: personalCareMap.get('Oral hygiene')?.caregiverNotes || 'N/A' },
                { label: 'Hair care:', value: personalCareMap.get('Hair care')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: personalCareMap.get('Hair care')?.caregiverNotes || 'N/A' },
                { label: 'Nail care (hands only):', value: personalCareMap.get('Nail care (hands only)')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: personalCareMap.get('Nail care (hands only)')?.caregiverNotes || 'N/A' },
                { label: 'Toileting/Incontinence care:', value: personalCareMap.get('Toileting/Incontinence care')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: personalCareMap.get('Toileting/Incontinence care')?.caregiverNotes || 'N/A' },
                { label: 'Empty catheter bag:', value: personalCareMap.get('Empty catheter bag')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: personalCareMap.get('Empty catheter bag')?.caregiverNotes || 'N/A' },
                { label: 'Empty colostomy bag:', value: personalCareMap.get('Empty colostomy bag')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: personalCareMap.get('Empty colostomy bag')?.caregiverNotes || 'N/A' },
                { label: 'Measure/record intake/output:', value: personalCareMap.get('Measure/record intake/output')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: personalCareMap.get('Measure/record intake/output')?.caregiverNotes || 'N/A' },
                { label: 'caregiverNotes:', value: personalCareMap.get('Skin care (intact skin only)')?.caregiverNotes || 'N/A' },
                { label: 'Skin care (intact skin only):', value: personalCareMap.get('Skin care (intact skin only)')?.selectedDays.join(', ') || 'N/A' },
                { label: 'Pressure sore prevention:', value: personalCareMap.get('Pressure sore prevention')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: personalCareMap.get('Pressure sore prevention')?.caregiverNotes || 'N/A' },
            ];
        };

        personalCareMap ?
            drawSection('Visit Note 1 - Personal Care', formatPersonalCareSection(personalCareMap))
            : console.error('visitNote1 is null or undefined.');

        const mealsMap = visitNote2 ? visitNote2.meals : "";

        const formatMealsSection = (mealsMap) => {
            return [
                { label: 'Meal planning:', value: mealsMap.get('Meal planning')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: mealsMap.get('Meal planning')?.caregiverNotes || 'N/A' },
                { label: 'Food purchasing:', value: mealsMap.get('Food purchasing')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: mealsMap.get('Food purchasing')?.caregiverNotes || 'N/A' },
                { label: 'Food preparation/storage:', value: mealsMap.get('Food preparation/storage')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: mealsMap.get('Food preparation/storage')?.caregiverNotes || 'N/A' },
                { label: 'Food serving:', value: mealsMap.get('Food serving')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: mealsMap.get('Food serving')?.caregiverNotes || 'N/A' },
                { label: 'Feeding:', value: mealsMap.get('Feeding')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: mealsMap.get('Feeding')?.caregiverNotes || 'N/A' },
                { label: 'Encourage fluids:', value: mealsMap.get('Encourage fluids')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: mealsMap.get('Encourage fluids')?.caregiverNotes || 'N/A' }
            ];
        };

        mealsMap ?
            drawSection('Visit Note 2 - Personal Care', formatMealsSection(mealsMap))
            : console.error('visitNote2 is null or undefined.');

        const householdDutiesMap = visitNote3 ? visitNote3.householdDuties : "";

        const formatHouseholdDutiesSection = (householdDutiesMap) => {
            const getValue = (map, key) => {
                if (map instanceof Map) {
                    return map.get(key);
                } else {
                    return map[key];
                }
            };

            return [
                { label: 'Clean living area(s):', value: getValue(householdDutiesMap, 'Clean living area(s)')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(householdDutiesMap, 'Clean living area(s)')?.caregiverNotes || 'N/A' },
                { label: 'Clean bathroom(s):', value: getValue(householdDutiesMap, 'Clean bathroom(s)')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(householdDutiesMap, 'Clean bathroom(s)')?.caregiverNotes || 'N/A' },
                { label: 'Change bed linens:', value: getValue(householdDutiesMap, 'Change bed linens')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(householdDutiesMap, 'Change bed linens')?.caregiverNotes || 'N/A' },
                { label: 'Laundry (wash/dry/fold/store):', value: getValue(householdDutiesMap, 'Laundry (wash/dry/fold/store)')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(householdDutiesMap, 'Laundry (wash/dry/fold/store)')?.caregiverNotes || 'N/A' }
            ];
        };


        householdDutiesMap ?
            drawSection('Visit Note 3 - Personal Care', formatHouseholdDutiesSection(householdDutiesMap))
            : console.error('visitNote3 is null or undefined.');

        const socialNeedsMap = visitNote4 ? visitNote4.socialNeeds : "";

        const formatSocialNeedsSection = (socialNeedsMap) => {
            const getValue = (map, key) => {
                // If map is an object, use bracket notation; if it's a Map, use get().
                if (map instanceof Map) {
                    return map.get(key);
                } else {
                    return map[key];
                }
            };

            return [
                { label: 'Companionship:', value: getValue(socialNeedsMap, 'Companionship')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(socialNeedsMap, 'Companionship')?.caregiverNotes || 'N/A' },
                { label: 'Dining out/entertainment:', value: getValue(socialNeedsMap, 'Dining out/entertainment')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(socialNeedsMap, 'Dining out/entertainment')?.caregiverNotes || 'N/A' },
                { label: 'Community/social activities:', value: getValue(socialNeedsMap, 'Community/social activities')?.selectedDays.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(socialNeedsMap, 'Community/social activities')?.caregiverNotes || 'N/A' }
            ];
        };

        socialNeedsMap ?
            drawSection('Visit Note 4 - Personal Care', formatSocialNeedsSection(socialNeedsMap))
            : console.error('visitNote4 is null or undefined.');

        const otherTasksMap = visitNote5 ? visitNote5.otherTasks : "";

        const formatOtherTasksSection = (otherTasksMap) => {
            const getValue = (map, key) => {
                // Check if map is a Map or Object and access accordingly
                if (map instanceof Map) {
                    return map.get(key);
                } else {
                    return map[key];
                }
            };

            return [
                { label: 'Run errands:', value: getValue(otherTasksMap, 'Run errands')?.selectedDays?.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(otherTasksMap, 'Run errands')?.caregiverNotes || 'N/A' },
                { label: 'Transport to appointments:', value: getValue(otherTasksMap, 'Transport to appointments')?.selectedDays?.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(otherTasksMap, 'Transport to appointments')?.caregiverNotes || 'N/A' },
                { label: 'Mobility assistance:', value: getValue(otherTasksMap, 'Mobility assistance')?.selectedDays?.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(otherTasksMap, 'Mobility assistance')?.caregiverNotes || 'N/A' },
                { label: 'Comfort care:', value: getValue(otherTasksMap, 'Comfort care')?.selectedDays?.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(otherTasksMap, 'Comfort care')?.caregiverNotes || 'N/A' },
                { label: 'Remind medication box times:', value: getValue(otherTasksMap, 'Remind medication box times')?.selectedDays?.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(otherTasksMap, 'Remind medication box times')?.caregiverNotes || 'N/A' },
                { label: 'Reposition bedbound client:', value: getValue(otherTasksMap, 'Reposition bedbound client')?.selectedDays?.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(otherTasksMap, 'Reposition bedbound client')?.caregiverNotes || 'N/A' },
                { label: 'Care for pets:', value: getValue(otherTasksMap, 'Care for pets')?.selectedDays?.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(otherTasksMap, 'Care for pets')?.caregiverNotes || 'N/A' },
                { label: "Client's initials:", value: getValue(otherTasksMap, "Client's initials")?.selectedDays?.join(', ') || 'N/A' },
                { label: 'caregiverNotes:', value: getValue(otherTasksMap, "Client's initials")?.caregiverNotes || 'N/A' }
            ];
        };


        otherTasksMap ?
            drawSection('Visit Note 5 - Personal Care', formatOtherTasksSection(otherTasksMap))
            : console.error('visitNote5 is null or undefined.');

      

        satisfactionform1
            ? drawSection('Satisfaction Form 1 - Detailed Report', [
                { label: 'Client Name:', value: satisfactionform1.clientName || 'N/A' },
                { label: 'Phone:', value: satisfactionform1.phone || 'N/A' },
                { label: 'Admission Date:', value: satisfactionform1.admissionDate ? satisfactionform1.admissionDate.toISOString().split('T')[0] : 'N/A' },
                { label: 'Discharge Date:', value: satisfactionform1.dischargeDate ? satisfactionform1.dischargeDate.toISOString().split('T')[0] : 'N/A' },
                { label: 'Interview Date:', value: satisfactionform1.interviewDate ? satisfactionform1.interviewDate.toISOString().split('T')[0] : 'N/A' },
                { label: 'Name of Person Answering:', value: satisfactionform1.nameOfPersonAnswering || 'N/A' },
                { label: 'Relationship:', value: satisfactionform1.relationship || 'N/A' },
                { label: 'Name of Service Provider:', value: satisfactionform1.nameOfServiceProvider || 'N/A' }
            ])
            : console.error('Satisfactionform1 data is null or undefined.');

        satisfactionform2
            ? drawSection('Satisfaction Form 2 - Detailed Report', [
                {
                    label: 'Questions:', value: satisfactionform2.questions.length > 0
                        ? satisfactionform2.questions.map((q, index) =>
                            `Q${index + 1} - Yes: ${q.yes}, No: ${q.no}, NA: ${q.na}, Comments: ${q.comments || 'N/A'}`
                        ).join('; ')
                        : 'N/A'
                },
                { label: 'Other Comments:', value: satisfactionform2.otherComments || 'N/A' },
                { label: 'Survey Method:', value: satisfactionform2.surveyMethod || 'N/A' },
                { label: 'Client Signature:', value: satisfactionform2.clientSignature || 'N/A' },
                { label: 'Client Date:', value: satisfactionform2.clientDate ? satisfactionform2.clientDate.toISOString().split('T')[0] : 'N/A' },
                { label: 'Admin Signature:', value: satisfactionform2.adminSignature || 'N/A' },
                { label: 'Admin Date:', value: satisfactionform2.adminDate ? satisfactionform2.adminDate.toISOString().split('T')[0] : 'N/A' }
            ])
            : console.error('Satisfactionform2 data is null or undefined.');

        faccident
            ? drawSection('Accident Report - Detailed Report', [
                // { label: 'Client ID:', value: faccident.clientId || 'N/A' },
                { label: 'Todays Date:', value: faccident.todaysDate ? new Date(faccident.todaysDate).toLocaleDateString() : 'N/A' },
                { label: 'Incident Date:', value: faccident.incidentDate ? new Date(faccident.incidentDate).toLocaleDateString() : 'N/A' },
                { label: 'Time:', value: faccident.time || 'N/A' },
                { label: 'Complaint Type:', value: faccident.complaintType.length > 0 ? faccident.complaintType.join(', ') : 'N/A' },
                { label: 'Client Name:', value: faccident.clientName || 'N/A' },
                { label: 'Client Telephone:', value: faccident.clientTel || 'N/A' },
                { label: 'Caregiver:', value: faccident.caregiver || 'N/A' },
                { label: 'Description:', value: faccident.description || 'N/A' },
                { label: 'Action Taken:', value: faccident.actionTaken || 'N/A' },
                { label: 'Resolution Date:', value: faccident.resolutionDate ? faccident.resolutionDate.toISOString().split('T')[0] : 'N/A' },
                { label: 'Resolution Time:', value: faccident.resolutionTime || 'N/A' },
                { label: 'Follow-Up Actions:', value: faccident.followUpActions || 'N/A' },
                { label: 'Follow-Up Call Date:', value: faccident.followUpCallDate ? faccident.followUpCallDate.toISOString().split('T')[0] : 'N/A' },
                { label: 'Follow-Up Call Time:', value: faccident.followUpCallTime || 'N/A' },
                { label: 'Notes:', value: faccident.notes || 'N/A' },
                { label: 'Admin Signature:', value: faccident.adminSignature || 'N/A' }
            ])
            : console.error('Faccident data is null or undefined.');

        const pdfBytes = await pdfDoc.save();
        return { pdfBuffer: Buffer.from(pdfBytes) };
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw new Error('PDF generation failed');
    }
};

module.exports = { createPDF };
