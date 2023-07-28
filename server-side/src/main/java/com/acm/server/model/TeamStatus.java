package com.acm.server.model;

/**
 * Team Status
 * REGISTERED: Team is registered and waiting for payment
 * WAITING_FOR_PAYMENT: Team is waiting for payment
 * RESERVED: Team is reserved
 * REJECTED: Team is rejected
 * FINALIZED: Team is finalized
 * @see com.acm.server.domain.Team
 * @author Farid Masjedi
 */
public enum TeamStatus {
    REGISTERED, WAITING_FOR_PAYMENT, RESERVED, REJECTED, FINALIZED, UNKNOWN
}
