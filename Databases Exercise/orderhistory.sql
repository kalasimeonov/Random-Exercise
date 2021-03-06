/*
   Monday, March 30, 20206:38:32 PM
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
CREATE TABLE dbo.orderhistory
	(
	date date NOT NULL,
	customer int NOT NULL,
	order_number bigint NOT NULL,
	total_price decimal(18, 0) NOT NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.orderhistory SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
select Has_Perms_By_Name(N'dbo.orderhistory', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.orderhistory', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.orderhistory', 'Object', 'CONTROL') as Contr_Per 