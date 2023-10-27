import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StepsConfig as steps } from "../utility/config";
import pictoFabrication from "../assets/images/picto-fabrication.svg";
import pictoGarantie from "../assets/images/picto-garantie.svg";
import pictoPose from "../assets/images/picto-pose.svg";
import pictoRelationClient from "../assets/images/picto-relation-client.svg";
import poseOfferte from "../assets/images/pose-offerte.png";
import noPic from "../assets/images/no-pic.png";
import bgChoice from "../assets/images/bg-choice.png";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { QUOTATION_API_URL } from "../utility/constants";
import { toast } from "react-toastify";
import { toastConfig } from "../utility/toastConfig";
import InputMask from "react-input-mask";

function Step({ setProgress }) {
	const [currentStep, setCurrentStep] = useState(0);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [selectedPreferences, setSelectedPreferences] = useState(new Map());
	const [showLoading, setShowLoading] = useState(false);

	const scroller = useRef([]);

	useEffect(() => {
		if (currentStep === 0) {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		} else {
			scroller.current[currentStep]?.scrollIntoView({
				behavior: "smooth",
			});
		}
	}, [currentStep, selectedProduct]);

	const userDetailsSchema = Yup.object().shape({
		civility: Yup.string().required("Ce champ est requis."),
		lastName: Yup.string().required("Ce champ est requis."),
		firstName: Yup.string().required("Ce champ est requis."),
		email: Yup.string()
			.matches(
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				"Ce champ n'est pas complet ou erroné."
			)
			.required("Ce champ n'est pas complet ou erroné."),
		phoneNumber: Yup.string()
			.matches(/^\d{10}$/, "Ce champ n'est pas complet ou erroné.")
			.required("Ce champ n'est pas complet ou erroné."),
		projectDetails: Yup.string(),
		emailSubscription: Yup.boolean(),
		textSubscription: Yup.boolean(),
	});

	function resetQuotationDetails() {
		setProgress(10);
		setCurrentStep(0);
		setSelectedProduct(null);
		setSelectedPreferences({});
		scroller.current = [];
	}

	function handleMaskedPhoneNumberChange(e, setFieldValue) {
		const value = e.target.value || "";
		const changedValue = value
			.replace(/\)/g, "")
			.replace(/\(/g, "")
			.replace(/-/g, "")
			.replace(/ /g, "");
		setFieldValue("phoneNumber", changedValue);
	}

	async function handleSubmit(values) {
		setShowLoading(true);

		const response = await fetch(QUOTATION_API_URL, {
			method: "POST",
			body: values,
			headers: { "content-type": "application/json" },
		});

		if (response.ok) {
			toast.success("Demande de devis reçue", toastConfig);
			resetQuotationDetails();
		} else {
			toast.error("Quelque chose s'est mal passé!", toastConfig);
		}

		setShowLoading(false);
	}

	function handlePreviousStep() {
		// if we are back to product selection page
		if (currentStep === 1) {
			setProgress(10);
		} else if (currentStep === 2) {
			setProgress(20);
		} else {
			setProgress(
				steps[selectedProduct]?.steps[currentStep - 3]?.progress
			);
		}

		setCurrentStep(Math.max(0, currentStep - 1));
	}

	function handleProductSelection(step, product) {
		// if we are at the product selection step, empty the preference object
		if (product !== selectedProduct) {
			setSelectedProduct(product);
			setSelectedPreferences({
				product: step?.name,
			});
		}
		setProgress(20);
		setCurrentStep(1);
	}

	function handleChoiceSelection(step, option, currentIndex) {
		setSelectedPreferences({
			...selectedPreferences,
			[step?.id]: option?.name,
		});
		setProgress(step?.progress);
		setCurrentStep(currentIndex + 1);
	}

	function handleInputFocus(e) {
		e.target
			.closest(".labelToTransformCustom")
			.classList.add("floating-label");
	}

	function handleInputBlur(e) {
		if (!e.target.value) {
			e.target
				.closest(".labelToTransformCustom")
				.classList.remove("floating-label");
		}
	}

	return (
		<>
			<div
				className="container flex flex-wrap h-full"
				style={{ maxHeight: "calc(100vh - 90px - 4px)" }}
			>
				{/* Left Side - Start */}

				<div className="lg:h-full custom-scrollbar w-full lg:w-1/2 py-5 lg:py-10 lg:pr-[90px] h-full overflow-auto custom-scrollbar">
					<div className="hidden lg:block">
						{currentStep !== 0 && (
							<div
								className="mb-4 cursor-pointer"
								onClick={() => handlePreviousStep()}
							>
								<FontAwesomeIcon
									icon="fa-solid fa-angle-left"
									className="icon icon--lg transition-link text-base text-brand-01"
								/>

								<span className="text-brand-01 font-bold">
									Étape précédente
								</span>
							</div>
						)}
					</div>

					<h1 className="display text-base display--bold text-[#616073] font-bold uppercase">
						Demande de devis
					</h1>

					<div className="flex flex-col gap-4 lg:gap-5 relative opacity-100 transition-all">
						{currentStep === 0 && (
							<>
								<h2 className="display display-6 display--bold text-black font-bold text-2xl hidden lg:block">
									Quel produit vous intéresse ?
								</h2>

								<div
									className="grid grid-cols-12 gap-3 lg:pl-1 mx-0.5 lg:mx-0 hidden lg:grid"
									id={steps[0]?.id}
								>
									{steps?.map((step, index) => {
										if (index !== 0) {
											return (
												<div
													className={
														"bg-white px-2 lg:px-4 lg:pb-2 lg:pb-4 col-span-6 lg:col-span-4 text-center lg:min-h-[150px] relative group overflow-hidden hover:cursor-pointer py-2" +
														(selectedProduct ===
														index
															? " outline outline-[2px] outline-brand-01 py-2"
															: "")
													}
													key={step?.id}
													onClick={() =>
														handleProductSelection(
															step,
															index
														)
													}
												>
													<div className="absolute-full translate-y-full opacity-0 transition duration-300 bg-brand-01-light group-hover:translate-y-0 group-hover:opacity-20"></div>
													<div className="w-[72px] lg:h-[104px] h-[80px] mx-auto flex items-center justify-center">
														<img
															className="object-contain relative z-50"
															src={step.choiceImg}
															alt={step?.id}
															width="500"
															height="500"
														/>
													</div>
													<span className="relative z-10 text-brand-01 font-semibold">
														{step?.name}
													</span>
												</div>
											);
										}
									})}
								</div>
							</>
						)}

						<h2
							className="display display-6 display--bold text-black font-bold text-2xl block lg:hidden"
							ref={(ele) => (scroller.current[currentStep] = ele)}
						>
							Quel produit vous intéresse ?
						</h2>

						<div
							className="grid grid-cols-12 gap-3 lg:pl-1 mx-0.5 block lg:hidden"
							id={steps[0]?.id}
						>
							{steps?.map((step, index) => {
								if (index !== 0) {
									return (
										<div
											className={
												"bg-white px-2 lg:px-4 lg:pb-2 lg:pb-4 col-span-6 lg:col-span-4 text-center lg:min-h-[150px] relative group overflow-hidden hover:cursor-pointer py-2" +
												(selectedProduct === index
													? " outline outline-[2px] outline-brand-01 py-2"
													: "")
											}
											key={step?.id}
											onClick={() =>
												handleProductSelection(
													step,
													index
												)
											}
										>
											<div className="absolute-full translate-y-full opacity-0 transition duration-300 bg-brand-01-light group-hover:translate-y-0 group-hover:opacity-20"></div>
											<div className="w-[72px] lg:h-[104px] h-[80px] mx-auto flex items-center justify-center">
												<img
													className="object-contain relative z-50"
													src={step.choiceImg}
													alt={step?.id}
													width="500"
													height="500"
													style={{
														mixBlendMode:
															"multiply",
													}}
												/>
											</div>
											<span className="relative z-10 text-brand-01 font-semibold">
												{step?.name}
											</span>
										</div>
									);
								}
							})}
						</div>

						{currentStep !== 0 && (
							<div className="lg:hidden">
								{steps[selectedProduct]?.steps?.map(
									(productStep, productStepIndex) => {
										return (
											<>
												{productStepIndex <
													currentStep && (
													<>
														{productStepIndex ===
															currentStep - 1 && (
															<div
																className="mb-4 cursor-pointer"
																onClick={() =>
																	handlePreviousStep()
																}
																ref={(ele) =>
																	(scroller.current[
																		currentStep
																	] = ele)
																}
															>
																<FontAwesomeIcon
																	icon="fa-solid fa-angle-left"
																	className="icon icon--lg transition-link text-base text-brand-01"
																/>

																<span className="text-brand-01 font-bold">
																	Étape
																	précédente
																</span>
															</div>
														)}

														<h2 className="display display-6 display--bold text-black font-bold text-2xl">
															{
																productStep?.question
															}
														</h2>
														<div
															className="grid grid-cols-12 gap-3 lg:pl-2 mx-0.5 mb-5"
															id={productStep?.id}
														>
															{productStep?.options?.map(
																(step) => {
																	return (
																		<div
																			className={
																				"bg-white px-2 lg:px-4 lg:pb-2 lg:pb-4 col-span-6 lg:col-span-4 text-center lg:min-h-[150px] relative group overflow-hidden hover:cursor-pointer" +
																				(step?.isText
																					? " pt-4 flex items-center justify-center min-h-[104px]"
																					: " py-2") +
																				(Object.keys(
																					selectedPreferences
																				)?.filter(
																					(
																						pref
																					) =>
																						pref ===
																						productStep?.id
																				) &&
																				selectedPreferences[
																					productStep
																						?.id
																				] ===
																					step?.name
																					? " outline outline-[2px] outline-brand-01"
																					: "")
																			}
																			key={
																				step?.name
																			}
																			onClick={() =>
																				handleChoiceSelection(
																					productStep,
																					step,
																					productStepIndex +
																						1
																				)
																			}
																		>
																			<div className="absolute-full translate-y-full opacity-0 transition duration-300 bg-brand-01-light group-hover:translate-y-0 group-hover:opacity-20"></div>

																			{!step?.isText && (
																				<div className="w-[72px] lg:h-[104px] h-[80px] mx-auto flex items-center justify-center">
																					<img
																						className="object-contain relative z-50"
																						src={
																							step?.choiceImg ??
																							noPic
																						}
																						alt={
																							productStep?.id
																						}
																						width={
																							productStep?.id ===
																								"matieres" ||
																							productStep?.id ===
																								"couleurs"
																								? "70"
																								: "500"
																						}
																						height={
																							productStep?.id ===
																								"matieres" ||
																							productStep?.id ===
																								"couleurs"
																								? "70"
																								: "500"
																						}
																						style={{
																							mixBlendMode:
																								"multiply",
																						}}
																					/>
																				</div>
																			)}
																			<span
																				className={
																					"relative z-10 text-brand-01 font-semibold " +
																					(step?.isText
																						? "text-[22px]"
																						: "")
																				}
																			>
																				{
																					step?.name
																				}
																			</span>
																		</div>
																	);
																}
															)}
														</div>
													</>
												)}
											</>
										);
									}
								)}
							</div>
						)}

						{currentStep !== 0 &&
							currentStep - 1 <
								steps[selectedProduct]?.steps.length && (
								<>
									<h2 className="display display-6 display--bold text-black font-bold text-2xl hidden lg:block">
										{
											steps[selectedProduct]?.steps[
												currentStep - 1
											]?.question
										}
									</h2>
									<div
										className="grid grid-cols-12 gap-3 lg:pl-1 mx-0.5 hidden lg:grid"
										id={
											steps[selectedProduct]?.steps[
												currentStep - 1
											]?.id
										}
									>
										{steps[selectedProduct]?.steps[
											currentStep - 1
										]?.options?.map((step) => {
											return (
												<div
													className={
														"bg-white px-2 lg:px-4 lg:pb-2 lg:pb-4 col-span-6 lg:col-span-4 text-center lg:min-h-[150px] relative group overflow-hidden hover:cursor-pointer" +
														(step?.isText
															? " pt-4 flex items-center justify-center min-h-[104px]"
															: " py-2") +
														(Object.keys(
															selectedPreferences
														)?.filter(
															(pref) =>
																pref ===
																steps[
																	selectedProduct
																]?.steps[
																	currentStep -
																		1
																]?.id
														) &&
														selectedPreferences[
															steps[
																selectedProduct
															]?.steps[
																currentStep - 1
															]?.id
														] === step?.name
															? " outline outline-[2px] outline-brand-01"
															: "")
													}
													key={step?.name}
													onClick={() =>
														handleChoiceSelection(
															steps[
																selectedProduct
															]?.steps[
																currentStep - 1
															],
															step,
															currentStep
														)
													}
												>
													<div className="absolute-full translate-y-full opacity-0 transition duration-300 bg-brand-01-light group-hover:translate-y-0 group-hover:opacity-20"></div>

													{!step?.isText && (
														<div className="w-[72px] lg:h-[104px] h-[80px] mx-auto flex items-center justify-center">
															<img
																className="object-contain relative z-50"
																src={
																	step?.choiceImg ??
																	noPic
																}
																alt={
																	steps[
																		selectedProduct
																	]?.steps[
																		currentStep -
																			1
																	]?.id
																}
																width={
																	steps[
																		selectedProduct
																	]?.steps[
																		currentStep -
																			1
																	]?.id ===
																		"matieres" ||
																	steps[
																		selectedProduct
																	]?.steps[
																		currentStep -
																			1
																	]?.id ===
																		"couleurs"
																		? "70"
																		: "500"
																}
																height={
																	steps[
																		selectedProduct
																	]?.steps[
																		currentStep -
																			1
																	]?.id ===
																		"matieres" ||
																	steps[
																		selectedProduct
																	]?.steps[
																		currentStep -
																			1
																	]
																		? "70"
																		: "500"
																}
																style={{
																	mixBlendMode:
																		"multiply",
																}}
															/>
														</div>
													)}
													<span
														className={
															"relative z-10 text-brand-01 font-semibold " +
															(step?.isText
																? "text-[22px]"
																: "")
														}
													>
														{step?.name}
													</span>
												</div>
											);
										})}
									</div>
								</>
							)}

						{currentStep - 1 ===
							steps[selectedProduct]?.steps.length && (
							<>
								<div
									className="lg:hidden cursor-pointer"
									onClick={() => handlePreviousStep()}
									ref={(ele) =>
										(scroller.current[currentStep] = ele)
									}
								>
									<FontAwesomeIcon
										icon="fa-solid fa-angle-left"
										className="icon icon--lg transition-link text-base text-brand-01"
									/>

									<span className="text-brand-01 font-bold">
										Étape précédente
									</span>
								</div>

								<Formik
									initialValues={{
										...selectedPreferences,
										civility: "Madame",
										firstName: "",
										lastName: "",
										email: "",
										phoneNumber: "",
										projectDetails: "",
										emailSubscription: false,
										textSubscription: false,
									}}
									validationSchema={userDetailsSchema}
									onSubmit={handleSubmit}
								>
									{({
										isSubmitting,
										errors,
										touched,
										setFieldValue,
									}) => (
										<Form className="flex flex-col gap-5 lg:gap-3 relative opacity-100 transition-all">
											<h2 className="display display-6 display--bold text-black font-bold text-2xl">
												Vos coordonnées
											</h2>

											<div className="grid grid-cols-12 gap-3">
												{/* Civility */}
												<div className="col-span-12">
													<span>Votre civilité*</span>
													<div className="flex flex-col">
														<div className="flex flex-wrap gap-10">
															<div>
																<div className="flex flex-wrap gap-4 items-center">
																	<Field
																		type="radio"
																		name="civility"
																		id="Madame"
																		value="Madame"
																		className="quotationRadio"
																		checked={
																			true
																		}
																	/>
																	<label htmlFor="Madame">
																		Madame
																	</label>
																</div>
															</div>
															<div>
																<div className="flex flex-wrap gap-4 items-center">
																	<Field
																		type="radio"
																		name="civility"
																		id="Monsieur"
																		value="Monsieur"
																		className="quotationRadio"
																	/>
																	<label htmlFor="Monsieur">
																		Monsieur
																	</label>
																</div>
															</div>
														</div>
													</div>
												</div>

												{/* Last Name */}
												<div className="col-span-12 md:col-span-6">
													<div className="labelToTransformCustom">
														<div className="input-group flex-1">
															<Field
																name="lastName"
																id="lastName"
																className="peer input-text md:!rounded mx-lg:w-full col-span-12 quotationInput lg:h-11"
																onFocus={(e) =>
																	handleInputFocus(
																		e
																	)
																}
																onBlur={(e) =>
																	handleInputBlur(
																		e
																	)
																}
															/>
														</div>
														<label>
															Votre nom*
														</label>
														{errors?.lastName &&
															touched?.lastName && (
																<span className="text-xs text-alert-danger font-semibold">
																	{
																		errors?.lastName
																	}
																</span>
															)}
													</div>
												</div>

												{/* First Name */}
												<div className="col-span-12 md:col-span-6">
													<div className="labelToTransformCustom">
														<div className="input-group flex-1">
															<Field
																name="firstName"
																id="firstName"
																className="peer input-text md:!rounded mx-lg:w-full col-span-12 quotationInput lg:h-11"
																onFocus={(e) =>
																	handleInputFocus(
																		e
																	)
																}
																onBlur={(e) =>
																	handleInputBlur(
																		e
																	)
																}
															/>
														</div>
														<label>
															Votre prénom*
														</label>
														{errors?.firstName &&
															touched?.firstName && (
																<span className="text-xs text-alert-danger font-semibold">
																	{
																		errors?.firstName
																	}
																</span>
															)}
													</div>
												</div>

												{/* Email */}
												<div className="col-span-12 md:col-span-6">
													<div className="labelToTransformCustom">
														<div className="input-group flex-1">
															<Field
																name="email"
																id="email"
																className="peer input-text md:!rounded mx-lg:w-full col-span-12 quotationInput lg:h-11"
																onFocus={(e) =>
																	handleInputFocus(
																		e
																	)
																}
																onBlur={(e) =>
																	handleInputBlur(
																		e
																	)
																}
															/>
															<label>
																Votre email*
															</label>
															{errors?.email &&
																touched?.email && (
																	<span className="text-xs text-alert-danger font-semibold">
																		{
																			errors?.email
																		}
																	</span>
																)}
														</div>
													</div>
												</div>

												{/* Phone Number */}
												<div className="col-span-12 md:col-span-6">
													<div className="labelToTransformCustom">
														<div className="input-group flex-1">
															<Field
																name="phoneNumber"
																id="phoneNumber"
															>
																{({
																	field,
																}) => (
																	<InputMask
																		{...field}
																		mask="09 99 99 99 99"
																		maskChar=" "
																		className="peer input-text md:!rounded mx-lg:w-full col-span-12 quotationInput lg:h-11"
																		onFocus={(
																			e
																		) =>
																			handleInputFocus(
																				e
																			)
																		}
																		onBlur={(
																			e
																		) =>
																			handleInputBlur(
																				e
																			)
																		}
																		onChange={(
																			e
																		) => {
																			handleMaskedPhoneNumberChange(
																				e,
																				setFieldValue
																			);
																		}}
																	/>
																)}
															</Field>
															<label>
																Votre téléphone*
															</label>
															{errors?.phoneNumber &&
																touched?.phoneNumber && (
																	<span className="text-xs text-alert-danger font-semibold">
																		{
																			errors?.phoneNumber
																		}
																	</span>
																)}
														</div>
													</div>
												</div>

												{/* Project Details */}
												<div className="col-span-12">
													<div className="labelToTransformCustom">
														<div className="input-group flex-1">
															<Field
																name="projectDetails"
																as="textarea"
																className="input-text md:!rounded mx-lg:w-full col-span-12 quotationInput"
																onFocus={(e) =>
																	handleInputFocus(
																		e
																	)
																}
																onBlur={(e) =>
																	handleInputBlur(
																		e
																	)
																}
															/>
															<label>
																Votre projet en
																quelques mots
															</label>
														</div>
													</div>
												</div>

												{/* Subscription Choice */}
												<div className="col-span-12">
													<div className="flex flex-col gap-2">
														<span className="!text-sm">
															{
																"Je consens à ce que mes données personnelles soient traitées par Global Fermetures Industrie et le point de vente pour recevoir de la prospection commerciale concernant la marque Global Fermetures :"
															}
														</span>
														<div className="flex flex-wrap gap-10">
															<div className="flex flex-wrap gap-4 items-center">
																<Field
																	type="checkbox"
																	name="emailSubscription"
																	id="emailSubscription"
																	className="focus:ring-0 focus:ring-offset-0"
																/>
																<label htmlFor="emailSubscription">
																	Par email
																</label>
															</div>
															<div className="flex flex-wrap gap-4 items-center">
																<Field
																	type="checkbox"
																	name="textSubscription"
																	id="textSubscription"
																	className="focus:ring-0 focus:ring-offset-0"
																/>
																<label htmlFor="textSubscription">
																	Par SMS
																</label>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="text-justify">
												<span className="text-xs text-gray-700">
													{
														"Global Fermetures respecte votre vie privée et vos données personnelles, voir "
													}
													<a href="#">
														mentions légales
													</a>
												</span>
											</div>
											<div>
												<button
													type="submit"
													className="btn btn--contact btn--md btn--semibold mt-6 next-btn group bg-brand-02-light opacity-70 w-full lg:w-auto"
													disabled={isSubmitting}
												>
													Envoyer
													{showLoading && (
														<FontAwesomeIcon
															icon="fa-solid fa-circle-notch"
															className="icon icon--lg animate-spin"
														/>
													)}
												</button>
											</div>
											<div className="text-justify mt-5">
												<span className="text-sm text-gray-700">
													{
														"¹ Global Fermetures INDUSTRIE traite et transfère vos données à la concession Global Fermetures de votre secteur pour répondre à votre demande de devis et effectuer de la prospection commerciale si vous y avez consenti. Ces traitements sont réalisés sur les bases légales de votre consentement pour la prospection commerciale et de l’exécution de mesures précontractuelles pour l’établissement de votre de vis. Vous disposez d'un droit d'accès, de rectification, de retrait de votre consentement ainsi que d'un droit à l'effacement, à la limitation du traitement et à la portabilité que vous pouvez exercer en écrivant à l’adresse :"
													}
													<a
														className="underline"
														href="#"
													>
														{"privacy@atrya.fr"}
													</a>
													{
														" Pour en savoir plus, veuillez consulter notre "
													}
													<a
														className="underline"
														target="_blank"
														href="#"
													>
														{
															"politique de confidentialité"
														}
													</a>
													.
												</span>
											</div>
										</Form>
									)}
								</Formik>
							</>
						)}
					</div>
				</div>

				{/* Left Side - End */}

				{/* Right Side - Start */}

				<div
					className={
						"w-full lg:w-1/2 lg:px-10 flex flex-col gap-6 relative py-5 lg:pb-10" +
						(currentStep === 0 ? " lg:pt-[68px]" : " lg:pt-[110px]")
					}
				>
					<div className="leftContainerBreak w-screen !absolute h-full lg:hidden lg:top-0 right-0 bottom-0 w-full lg:w-1/2 lg:h-full min-h-auto z-1">
						<div className="absolute-full bg-gradient-to-b from-[#222121] to-transparent z-2"></div>
						<img
							src={bgChoice}
							width="708"
							height="712"
							alt="Image d'ambiance du configurateur"
							className="h-full w-full object-cover"
						/>
					</div>

					<div className="z-20">
						<div className="display display-5 display--bold text-white font-bold z-10 text-3xl">
							Votre demande de devis en 2&nbsp;minutes
						</div>
					</div>

					<div className="bg-white flex flex-col max-w-[406px] z-10">
						<div className="p-4">
							{currentStep === 0 && (
								<div className="block mb-6">
									<div
										className="text-sm"
										dangerouslySetInnerHTML={{
											__html: steps[currentStep]
												?.rightContent,
										}}
									></div>
								</div>
							)}

							{currentStep !== 0 && (
								<div className="block">
									<div className="wysiwyg text-base font-bold">
										Votre demande de devis
									</div>
									<ul>
										<li>
											{Object.values(
												selectedPreferences
											)?.map((pref, index) => {
												if (index < currentStep) {
													return (
														<>
															<FontAwesomeIcon
																icon="fa-solid fa-check"
																className="icon icon--lg text-base text-black"
																key={
																	"pref_icon_" +
																	index
																}
															/>

															<span
																className="text-sm"
																key={
																	"pref_" +
																	index
																}
															>
																{pref}
															</span>
															<br />
														</>
													);
												}
											})}
										</li>
									</ul>
								</div>
							)}

							<div
								className={
									"flex flex-wrap gap-1 " +
									(currentStep === 0 ? "mt-0" : "mt-6")
								}
							>
								<picture>
									<img
										src={pictoFabrication}
										alt="Un tampon avec un drapeau français et écrit 'Fabrication française'"
										title=""
										width="80"
										height="80"
										loading="lazy"
										className="img object-cover object-center w-[64px] h-[64px] lg:w-[80px] lg:h-[80px]"
									/>
								</picture>
								<picture>
									<img
										src={pictoGarantie}
										alt="Un tampon avec écrit 'Garantie 30 ans'"
										title=""
										width="80"
										height="80"
										loading="lazy"
										className="img object-cover object-center w-[64px] h-[64px] lg:w-[80px] lg:h-[80px]"
									/>
								</picture>
								<picture>
									<img
										src={pictoPose}
										alt="Un tampon avec deux mains qui se serrent et écrit 'Pose excellence'"
										title=""
										width="80"
										height="80"
										loading="lazy"
										className="img object-cover object-center w-[64px] h-[64px] lg:w-[80px] lg:h-[80px]"
									/>
								</picture>
								<picture>
									<img
										src={pictoRelationClient}
										alt="Un tampon avec deux mains qui forment un cœur et écrit 'Service Relation Client'"
										title=""
										width="80"
										height="80"
										loading="lazy"
										className="img object-cover object-center w-[64px] h-[64px] lg:w-[80px] lg:h-[80px]"
									/>
								</picture>
							</div>
						</div>
						<div className="bg-gray-200 relative">
							<picture>
								<img
									src={poseOfferte}
									alt="pose offerte"
									title="pose offerte"
									width="406"
									height="116"
									loading="lazy"
									className="img object-cover object-center w-full h-full"
								/>
							</picture>
						</div>
					</div>
				</div>

				{/* Right Side - End */}
			</div>

			<div className="hidden lg:flex lg:absolute lg:top-0 right-0 bottom-0 w-full lg:w-1/2 lg:h-full min-h-[300px] z-1">
				<div className="absolute-full bg-gradient-to-b from-[#222121] to-transparent z-2 h-full"></div>
				<img
					src={
						currentStep === 0
							? steps[currentStep]?.rightImg
							: steps[selectedProduct]?.rightImg
					}
					alt={
						currentStep === 0
							? steps[currentStep]?.name
							: steps[selectedProduct]?.name
					}
					width="708"
					height="712"
					className="h-full w-full object-cover"
				/>
			</div>
		</>
	);
}

export default Step;
