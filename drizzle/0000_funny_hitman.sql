CREATE TABLE "blogs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar NOT NULL,
	"orgId" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"customDomain" text NOT NULL,
	"imgUrl" text
);
