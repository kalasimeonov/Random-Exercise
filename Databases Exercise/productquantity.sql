/*
   Monday, March 30, 20206:38:05 PM
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
CREATE TABLE dbo.productquantity
	(
	product int NOT NULL,
	quantity int NOT NULL,
	order_id bigint NOT NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.productquantity SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
select Has_Perms_By_Name(N'dbo.productquantity', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.productquantity', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.productquantity', 'Object', 'CONTROL') as Contr_Per 