
CREATE TABLE public.contact_message (
	numero_sequence serial NOT NULL,
	nom_prenom text NOT NULL,
	telephone text NOT NULL,
	message text NOT NULL,
	date_envoie date NULL,
	CONSTRAINT contact_message_pkey PRIMARY KEY (numero_sequence)
);

ALTER TABLE public.contact_message
  ADD COLUMN ouvert BOOLEAN DEFAULT FALSE;
