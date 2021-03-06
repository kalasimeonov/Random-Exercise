/*
   Monday, March 30, 20206:38:44 PM
   User: 
   Server: DESKTOP-29BGAAG
   Database: FurnitureFactory
   Application: 
*/

/* To prevent any potential data loss issues, you should review this script in detail before running it outside the context of the database designer.*/
BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT
BEGIN TRANSACTION
GO
CREATE TABLE dbo.customerlist
	(
	company_name nvarchar(50) NOT NULL,
	address nvarchar(100) NOT NULL,
	financial_id int NOT NULL,
	vat_number int NOT NULL,
	contact_person nvarchar(50) NOT NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.customerlist SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
select Has_Perms_By_Name(N'dbo.customerlist', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.customerlist', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.customerlist', 'Object', 'CONTROL') as Contr_Per 